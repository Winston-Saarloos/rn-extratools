import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Custom Components/CSS/Constants
import * as Constants from './Constants';
import './GridView.css';
import Modal from './ImageDetailModal';
import ImageThumbnail from './ImageThumbnail';
import { makeStyles, Paper, Theme } from '@material-ui/core';
import ScrollToTopButton from './GridViewScrollToTop';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}),
);

// Contains all information related to fetching images
type RequestParams = {
    Url: string,
    DisplayOrder: number,
    ImageLocation: number,
    SkipAmount: number,
    TakeAmount: number,
    Query?: string | null,
    FilterString: string,
}

type GridViewProps = {
    requestParams: RequestParams | undefined
}

type GridImageItem = {
    Id: number,
    Type: number,
    Accessibility: number,
    AccessibilityLocked: boolean,
    ImageName: string,
    Description?: string | null,
    PlayerId: number,
    TaggedPlayerIds: Array<number>,
    RoomId: number,
    PlayerEventId?: number | null,
    CreatedAt: string,
    CheerCount: number,
    CommentCount: number
}

var ImageItem: {
    Id: number,
    Type: number,
    Accessibility: number,
    AccessibilityLocked: boolean,
    ImageName: string,
    Description?: string | null,
    PlayerId: number,
    TaggedPlayerIds: Array<number>,
    RoomId: number,
    PlayerEventId?: number | null,
    CreatedAt: string,
    CheerCount: number,
    CommentCount: number
}

type resultObject = {
    dataObject: Array<GridImageItem> | [],
    status: number,
    message: string
};

var bLoadContainsFilters: boolean = false;

function GridView(props: GridViewProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalImage, setModalImage] = React.useState<GridImageItem>(ImageItem);
    const [imageDataResultCollection, setImageDataResultCollection] = React.useState<resultObject>({ dataObject: [], status: -1, message: 'No Image Results!' });
    // TODO - Add loading spinner that triggers after load image button is clicked.
    //const [loading, setLoading] = React.useState<boolean>(false); 

    var imageData = imageDataResultCollection.dataObject;

    // Only Fetch New Images when the request parameters have changed (aka Load Images button was clicked)
    useEffect(() => {
        if (props.requestParams !== undefined) {
            //setLoading(true);
            LoadImages(props.requestParams);
        }
    }, [props.requestParams]);

    // Image Observer Related Logic
    const [imageObserver, setImageObserver] = useState<IntersectionObserver>();

    function createObserver(inViewCallback: IntersectionObserverCallback, newOptions = {}) {
        const defaultOptions = {
            threshold: 0.1,
        }
        return new IntersectionObserver(inViewCallback, Object.assign(defaultOptions, newOptions));
    }

    function onImageInView(entries: any[], observer: { unobserve: (arg0: any) => void; }) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const imageSrc = element.getAttribute('data-src');

                element.removeAttribute('data-src');
                element.setAttribute('src', imageSrc);

                observer.unobserve(element);
            }
        });
    }

    useEffect(() => {
        const imageObserver = createObserver(onImageInView);
        setImageObserver(imageObserver);

        return () => {
            imageObserver.disconnect();
        }
    }, []);

    // Calls the API to load a set of images based on the supplied parameters.
    async function LoadImages(requestParameters: RequestParams) {
        var imageLocation = requestParameters.ImageLocation;
        var szUrl = requestParameters.Url;
        var takeAmount = requestParameters.TakeAmount;
        var skipAmount = requestParameters.SkipAmount;
        var searchQuery = requestParameters.Query;
        var displayOrder = requestParameters.DisplayOrder;
        var filterString = requestParameters.FilterString;

        if (imageLocation === Constants.GLOBAL_IMAGE_FEED) {
            szUrl = szUrl + `?sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`;

        } else if (imageLocation === Constants.ROOM_IMAGE_FEED) {
            szUrl = szUrl + `?room=${searchQuery}&sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`;

        } else {
            szUrl = szUrl + `?u=${searchQuery}&sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`;
        }

        if (filterString !== '') {
            filterString = encodeURI(filterString);  // A filter string contains values that are not valid in a URL therefore it needs to be encoded
            szUrl = `${szUrl}&filter=${filterString}`;
            bLoadContainsFilters = true;
        }

        // URL https://rn-rest-api.herokuapp.com/images?u={username}
        if (searchQuery === '' && (imageLocation === Constants.ROOM_IMAGE_FEED || imageLocation === Constants.USER_PHOTO_FEED || imageLocation === Constants.USER_PHOTO_LIBRARY)) {
            var szMessage = "Enter an '@' name to find photos.";

            if (imageLocation === Constants.ROOM_IMAGE_FEED) {
                szMessage = "Enter a room name '^' to find photos."
            }

            setImageDataResultCollection({ dataObject: [], status: -1, message: szMessage});

        } else {
            axios.get(szUrl)
                .then(async function (response) {
                    // handle success
                    var resultObject: resultObject = await response.data;

                    if (resultObject.status > -1) {
                        setImageDataResultCollection(resultObject);
                    } else {
                        setImageDataResultCollection({ dataObject: [], status: -1, message: '' });
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    setImageDataResultCollection({ dataObject: [], status: 500, message: 'An unexpected error occured. Please refresh and try again.  If problem persists contact (@Rocko) on Rec Room or Discord (Rocko#8625).' });
                })
        }
        //setLoading(false);
    }

    // Control Modal Open/Close State
    const handleClickOpen = async (imageId: number) => {
        var i = 0;
        if (imageData !== []) {
            for (i = 0; i < imageData.length; i++) {
                if (imageData[i].Id === imageId) {
                    setModalImage(imageData[i]);
                    break;
                }
            }
            setOpen(true);
        }
    };

    // Handles the close modal button click
    const handleClose = () => {
        setOpen(false);
    };

    if (imageData.length < 1) {
        if (bLoadContainsFilters) {
            return (
                <div className="GridView" style={{ overflow: 'hidden' }}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2} className={classes.paper}>No images match filter criteria.</Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            return (
                <div className="GridView" style={{ overflow: 'hidden' }}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2} className={classes.paper}>{imageDataResultCollection.message}</Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    } else {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                <Grid container spacing={1} direction="row">
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Paper elevation={2} className={classes.paper}>Total Image Results: {imageData.length}</Paper>
                    </Grid>
                    {imageData.map((image: GridImageItem) => {
                        return (
                            <Grid item xs={6} md={4} lg={3} xl={2} key={image.Id.toString()} >
                                <ImageThumbnail src={'https://img.rec.net/' + image.ImageName + '?width=500'} observer={imageObserver} alt={image.Id.toString()} openModal={handleClickOpen} imageId={image.Id} />
                            </Grid>
                        )
                    })}
                </Grid>
                <ScrollToTopButton />
                <Modal open={open} onClose={handleClose} imageData={modalImage} />
            </div>
        );
    }
}

export default GridView;