import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Styling
import './GridView.css';
import Modal from './Modal';
import ImageThumbnail from './ImageThumbnail';
import { makeStyles, Paper, Skeleton, Theme } from '@material-ui/core';

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

type RequestParams = {
    Url: string,
    DisplayOrder: number,
    ImageLocation: number,
    SkipAmount: number,
    TakeAmount: number,
    Query?: string | null
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

var imageObjectArray: {
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
}[] = [];

function GridView(props: GridViewProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalImage, setModalImage] = React.useState<GridImageItem>(ImageItem);
    const [imageDataResultCollection, setImageDataResultCollection] = React.useState<typeof imageObjectArray>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    var imageData = imageDataResultCollection;

    // Only Fetch New Images when the request parameters have changed (aka Load Images button was clicked)!
    useEffect(() => {
        if (props.requestParams !== undefined) {
            console.log("First Effect Fired!");
            setLoading(true);
            LoadImages(props.requestParams);
        }
    }, [props.requestParams]);

    // Separate Use Effect that fires when page number is updated
    const [imageObserver, setImageObserver] = useState<IntersectionObserver>();

    function createObserver(inViewCallback: IntersectionObserverCallback, newOptions = {}) {
        const defaultOptions = {
            threshold: 1,
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

    // Calls the API to load a set of images based on supplied parameters.
    async function LoadImages(requestParameters: RequestParams) {
        console.log("Load Images Function Fired..");
        var imageLocation = requestParameters.ImageLocation;
        var szUrl = requestParameters.Url;
        var takeAmount = requestParameters.TakeAmount;
        var skipAmount = requestParameters.SkipAmount;
        var searchQuery = requestParameters.Query;
        var displayOrder = requestParameters.DisplayOrder;

        console.log("Skip Amount: " + skipAmount);

        if (imageLocation === 3) {
            szUrl = szUrl + `?sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`
        } else {
            szUrl = szUrl + `?u=${searchQuery}&sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`;
        }

        // URL https://rn-rest-api.herokuapp.com/images?u={username}
        if (searchQuery === '' && imageLocation !== 3) {
            setImageDataResultCollection([]);

        } else {
            axios.get(szUrl)
                .then(async function (response) {
                    // handle success
                    imageObjectArray = await response.data;

                    if (imageObjectArray.length > 0) {
                        setImageDataResultCollection(imageObjectArray);

                    } else {
                        setImageDataResultCollection([]);
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
        setLoading(false);
    }

    // Control Modal Open/Close State
    const handleClickOpen = async (imageId: number) => {
        var i = 0;
        for (i = 0; i < imageData.length; i++) {
            if (imageData[i].Id === imageId) {
                setModalImage(imageData[i]);
                console.log(imageData[i]);
                break;
            }
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const XS_SIZE = 6;
    const MD_SIZE = 6;
    const LG_SIZE =3
    const XL_SIZE = 2;

    const SKELE_WIDTH_BOX = "100%";
    const SKELE_LINE_ONE = "90%";
    const SKELE_LINE_TWO = "85%";
    const SKELE_ANIMATION = "wave";

    if (typeof imageData == 'string' || imageData.length < 1) {
        if (loading) {
            const itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
            return (
                <div className="GridView" >
                    <Grid container spacing={1} direction="row" style={{ overflow: 'hidden' }}>
                        {itemArray.map((value) => {
                            return (
                                <Grid item xs={XS_SIZE} md={MD_SIZE} lg={LG_SIZE} xl={XL_SIZE} key={value} >
                                    <Skeleton animation={SKELE_ANIMATION} variant="rectangular" width={SKELE_WIDTH_BOX} height={250} />
                                    <Skeleton animation={SKELE_ANIMATION} variant="text" width={SKELE_LINE_ONE} height={20} />
                                    <Skeleton animation={SKELE_ANIMATION} variant="text" width={SKELE_LINE_TWO} height={20} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            )
        } else {
            return (
                <div className="GridView" style={{ overflow: 'hidden' }}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper className={classes.paper}>No Image Results!</Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    } else {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                <Grid container spacing={1} direction="row">
                    {imageData.map((image: GridImageItem) => {
                        return (
                            <Grid item xs={6} md={6} lg={3} xl={2} key={image.Id.toString()} >
                                <ImageThumbnail src={'https://img.rec.net/' + image.ImageName + '?width=500'} observer={imageObserver} alt={image.Id.toString()} openModal={handleClickOpen} imageId={image.Id} />
                            </Grid>
                        )
                    })}
                </Grid>
                <Modal open={open} onClose={handleClose} imageData={modalImage} />
            </div>
        );
    }
}

export default GridView;