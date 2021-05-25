import Grid from '@material-ui/core/Grid';
import React from 'react'

// Styling
import './GridView.css';
import Modal from './Modal';

type QueryParams = {
    Url: string,
    DisplayOrder: number,
    ImageLocation: number,
    SkipAmount: number,
    TakeAmount: number,
    Query?: string | null
}

type GridViewProps = {
    imageData: GridImageItem[],
    queryParams: QueryParams | undefined
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

var ImageItem : {
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

function GridView(props: GridViewProps) {
    //const [imageId, setImageId] = React.useState<number>(0);
    const [open, setOpen] = React.useState(false);
    const [modalImage, setModalImage] = React.useState<GridImageItem>(ImageItem);
    var imageData = props.imageData;
    var queryParams = {};
    if (props.queryParams) {
        queryParams = props.queryParams;
    }

    // Control Modal Open/Close State
    const handleClickOpen = async (imageId: number) => {
        var i = 0;
        for (i = 0; i < imageData.length; i++) {
            if (imageData[i].Id === imageId) {
                setModalImage(imageData[i]);
                break;
            }
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (typeof imageData == 'string' || imageData.length < 1) {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                    No Image Results!
            </div>
        )
    } else {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                <Grid container spacing={1} direction="row">
                    {imageData.map((image: GridImageItem) =>
                        <Grid item xs={6} md={6} lg={3} xl={2} key={image.Id.toString()} >
                            <img src={'https://img.rec.net/' + image.ImageName + '?width=500'} alt={image.Id.toString()} className="imageThumbnail" onClick={() => handleClickOpen(image.Id)} />
                        </Grid>
                    )}
                </Grid>
                 <Modal open={open} onClose={handleClose} imageData={modalImage} />
            </div>
        );
    }
}

export default GridView;
