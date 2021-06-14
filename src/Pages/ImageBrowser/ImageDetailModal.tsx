// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

// Not Material Imports
import React, { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { IconButton } from '@material-ui/core';

//Types
type ImageItem = {
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

// Component Props
type ModalProps = {
    open: boolean,
    onClose: Function,
    imageData: ImageItem
}

function Modal(props: ModalProps) {
    // State Variables
    const [photoOwnerName, setPhotoOwnerName] = React.useState<string>('');
    const [roomName, setRoomName] = React.useState<string>('');
    const [taggedPlayerString, setTaggedPlayerString] = React.useState<string>("No players were tagged.");

    // Constants
    const XS_VALUE = 12;
    const MD_VALUE = 6;
    const LG_VALUE = 6;
    const XL_VALUE = 3;

    useEffect(() => {
        if (props.imageData !== undefined) {
            getDataForModal(props.imageData);
        }
    }, [props.imageData]);

    async function getDataForModal(image: ImageItem) {
        // Get Room Name
        axios.get("https://rn-rest-api.herokuapp.com/bulk/rooms?id=" + image.RoomId)
            .then(async function (response) {
                // handle success
                var roomInfoJson = await response.data;
                var roomInfoObject = roomInfoJson.dataObject;
                if (roomInfoObject.length > 0) {
                    setRoomName(`^${roomInfoObject[0].Name}`);
                } else {
                    setRoomName("[Room is Private] - Cannot retreive room name.");
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        // Get Photo Owner Name
        axios.get("https://rn-rest-api.herokuapp.com/account?id=" + image.PlayerId)
            .then(async function (response) {
                // handle success
                var playerInfoJson = await response.data.dataObject;
                setPhotoOwnerName(`${playerInfoJson.displayName} (@${playerInfoJson.username})`);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        // Get Tagged Player Data
        if (image.TaggedPlayerIds.length > 0) {
            var userParams = '';
            for (var t = 0; t < image.TaggedPlayerIds.length; t++) {
                if (t === 0) {
                    userParams = `?id=${image.TaggedPlayerIds[t]}`;
                } else {
                    userParams += `&id=${image.TaggedPlayerIds[t]}`;
                }
            }

            axios.get("https://rn-rest-api.herokuapp.com/bulk/users" + userParams)
                .then(async function (response) {
                    // handle success
                    var playerInfoJson = await response.data.dataObject;
                    var szTaggedPlayers = "";
                    var i = 0;
                    playerInfoJson.forEach((item: { displayName: string; username: string; accountId: number; }) => {
                        if (item.accountId !== 1) {
                            if (i === playerInfoJson.length - 1) {
                                szTaggedPlayers = szTaggedPlayers + (item.displayName + " (@" + item.username + ") \r\n");
                            } else {
                                szTaggedPlayers = szTaggedPlayers + (item.displayName + " (@" + item.username + "), \r\n");
                            }
                        }

                        i++
                    });

                    setTaggedPlayerString(szTaggedPlayers);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        } else {
            setTaggedPlayerString("No players were tagged.");
        }

    }

    if (props.imageData && props.imageData.Id) {
        var modalImage = props.imageData;

        return (
            <Dialog maxWidth={'lg'} open={props.open} onClose={() => props.onClose()} aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">Image Information</DialogTitle>
                <DialogContent>
                    <img src={((modalImage.ImageName) ? `https://img.rec.net/${modalImage.ImageName}` : '')} style={{ height: "auto", width: "100%" }} alt="ImageDisplay" />
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
                            {modalImage.AccessibilityLocked.toString()}
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
                            <strong>Taken On:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblCreatedAtValue" zeroMinWidth >
                            {moment(modalImage.CreatedAt).format('MMMM Do YYYY, h:mm a') + ' (' + moment(modalImage.CreatedAt, "YYYYMMDD").fromNow() + ')'}
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
                            <strong>Player Event Name:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerEventIdValue" zeroMinWidth >
                            {((modalImage.PlayerEventId) ? modalImage.PlayerEventId + ' - Not Implemented Fully Yet' : 'No Event Information')}
                        </Grid>

                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerId" zeroMinWidth >
                            <strong>Photo Owner:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblPlayerIdValue" zeroMinWidth >
                            {((photoOwnerName !== '') ? photoOwnerName : modalImage.PlayerId)}
                        </Grid>

                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRoomId" zeroMinWidth >
                            <strong>Room Name:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRoomIdValue" zeroMinWidth >
                            {((roomName !== '') ? roomName : modalImage.RoomId)}
                        </Grid>

                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIds" zeroMinWidth >
                            <strong>Tagged Players:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblTaggedPlayersIdsValue" zeroMinWidth >
                            {(taggedPlayerString !== '') ? taggedPlayerString : modalImage.TaggedPlayerIds?.join(", ")}
                        </Grid>

                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRecNetLink" zeroMinWidth >
                            <strong>Rec.net Image Page:</strong>
                        </Grid>
                        <Grid item xs={XS_VALUE} md={MD_VALUE} lg={LG_VALUE} xl={XL_VALUE} key="lblRecNetLinkValue" zeroMinWidth >
                            <Link href={`https://rec.net/image/${modalImage.Id}`} target="_blank" rel="noopener" >https://rec.net/image/{modalImage.Id}</Link>
                            <IconButton aria-label="Copy rec.net Link" onClick={() => {navigator.clipboard.writeText(`https://rec.net/image/${modalImage.Id}`)}}>
                                <FileCopyOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.onClose()} variant="contained" color="primary" size="large" startIcon={<CloseIcon />}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    } else {
        return (
            <Dialog maxWidth={'lg'} open={props.open} onClose={() => props.onClose()} aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">Image Information</DialogTitle>
                <DialogContent>
                    An error occured loading the dialog window.
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.onClose()} variant="contained" color="primary" size="large" startIcon={<CloseIcon />}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default Modal;