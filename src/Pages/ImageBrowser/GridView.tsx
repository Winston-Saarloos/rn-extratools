import React from 'react'
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

// Styling
import './GridView.css';
//import { Component } from 'react';

type GridViewProps = {
    imageData: GridImageItem[],
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

function GridView({ imageData }: GridViewProps) {
    //const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalImage, setModalImage] = React.useState<Partial<GridImageItem>>({});
    // const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  
    const handleClickOpen = (imageId: number) => {
      var imageItem = {};
        for (var i = 0; i < imageData.length; i++) {
            if (imageData[i].Id === imageId) {
                imageItem = imageData[i];
                break;
            }
        }
        
        setModalImage(imageItem);

        setOpen(true);
        console.log(modalImage);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    // const handleMaxWidthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //   setMaxWidth(event.target.value as DialogProps['maxWidth']);
    // };
  
    // const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setFullWidth(event.target.checked);
    // };

    // Set the selected image object to the modal state and use it for parsing...

    //console.log(`Image Data:`);
    //console.log(imageData);
    //console.log(imageData.length);
    const XS_VALUE = 12;
    const MD_VALUE = 6;
    const LG_VALUE = 6;
    const XL_VALUE = 6;

    if (typeof imageData == 'string' || imageData.length < 1) {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                    No Image Results! {imageData}
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

                <Dialog maxWidth={'lg'} open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title">
                    <DialogTitle id="max-width-dialog-title">Image Information</DialogTitle>
                    <DialogContent>
                        <img src={'https://img.rec.net/' + modalImage.ImageName} style={{ height: "auto", width: "100%" }} alt="ImageDisplay" />
                        <Grid container spacing={1} direction="row" >
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblImageId" zeroMinWidth >
                                <strong>Image ID:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblImageIdValue" zeroMinWidth >
                                {modalImage.Id}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblAccessibility" zeroMinWidth >
                                <strong> Accessibility:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblAccessibilityValue" zeroMinWidth >
                                {modalImage.Accessibility}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblAccessibilityLocked" zeroMinWidth >
                                <strong>Accessibility Locked:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblAccessibilityLockedValue" zeroMinWidth >
                                {((modalImage.AccessibilityLocked) ? modalImage.AccessibilityLocked.toString() : 'false')}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCheerCount" zeroMinWidth >
                                <strong>Cheer Count:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCheerCountValue" zeroMinWidth >
                                {modalImage.CheerCount}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCommentCount" zeroMinWidth >
                                <strong>Comment Count:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCommentCountValue" zeroMinWidth >
                                {modalImage.CommentCount}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCreatedAt" zeroMinWidth >
                                <strong>Take On:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCreatedAtValue" zeroMinWidth >
                                {modalImage.CreatedAt}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblDescription" zeroMinWidth >
                                <strong>Description:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblDescriptionValue" zeroMinWidth >
                                {((modalImage.Description) ? modalImage.Description : 'Image contains no description')}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblImageName" zeroMinWidth >
                                <strong>Image Name:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblImageNameValue" zeroMinWidth >
                                <Typography noWrap>
                                    {modalImage.ImageName}
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerEventId" zeroMinWidth >
                                <strong>Player Event ID:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerEventIdValue" zeroMinWidth >
                                {((modalImage.PlayerEventId) ? modalImage.PlayerEventId : 'No Event Information')}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerId" zeroMinWidth >
                                <strong>Player ID:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerIdValue" zeroMinWidth >
                                {modalImage.PlayerId}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRoomId" zeroMinWidth >
                                <strong>Room ID:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRoomIdValue" zeroMinWidth >
                                {modalImage.RoomId}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIds" zeroMinWidth >
                                <strong>Tagged Players:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIdsValue" zeroMinWidth >
                                {modalImage.TaggedPlayerIds?.join(", ")}
                            </Grid>

                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIds" zeroMinWidth >
                                <strong>Rec.net Image Page:</strong>
                            </Grid>
                            <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIdsValue" zeroMinWidth >
                                <Link href={`https://rec.net/image/${modalImage.Id}`} target="_blank" rel="noopener" >https://rec.net/image/{modalImage.Id}</Link>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default GridView;
