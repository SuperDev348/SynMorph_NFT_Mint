import React, {useState} from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import ImageUploader from 'react-images-upload'
import { NotificationManager } from 'react-notifications'

import {uploadImage, uploadMetadata} from '../../api/file'
import {addChangeList} from '../../api/nft'
import { useSetting } from '../../provider/setting'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    textTransform: 'none',
    fontSize: 15,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
const UpdateDialog = (props) => {
  const [setting] = useSetting()
  const classes = useStyles()
  const {refresh, item} = props
  const [modalActive, setModalActive] = useState(false)
  const [image, setImage] = useState(null)
  const [pending, setPending] = useState(false)

  const handleClickOpen = () => {
    setImage(null)
    setPending(false)
    setModalActive(true)
  }
  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return false;
    }
    if (reason === "escapeKeyDown") {
      return false;
    }
    setModalActive(false)
  }
  const validate = () => {
    let res = true
    if (image === null) {
      res = true
      NotificationManager.warning('Please input new token image', 'Worning', 3000);
    }
    if (setting.address == '') {
      res = true
      NotificationManager.warning('Please connect wallet.', 'Worning', 3000);
    }
    return res
  }
  const handleSave = async () => {
    if (!validate())
      return
    setPending(true)
    const imageCid = await uploadImage(image, `${item.tokenId}.png`)
    const newMeta = {
      ...item.metadata,
      image: `https://ipfs.io/ipfs/${imageCid}/${item.tokenId}.png`,
      file_url: `https://ipfs.io/ipfs/${imageCid}/${item.tokenId}.png`
    }
    const metaCid = await uploadMetadata(newMeta, `${item.tokenId}.json`)
    const metaURI = `https://ipfs.io/ipfs/${metaCid}/${item.tokenId}.json`;
    try {
      await addChangeList(item.tokenId, metaURI, setting.address)
    } catch (error) {
      console.log(error)
      NotificationManager.warning(error.message, 'Worning', 3000);
    }
    refresh()
    setModalActive(false)
    setPending(false)
  }
  const onDrop = (file) => {
    setImage(file[0])
  }

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      <Backdrop className={classes.backdrop} open={pending} style={{zIndex: 9999}}>
        <CircularProgress color="primary" />
      </Backdrop>
      <Dialog 
        open={modalActive} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle id="form-dialog-title">Update token image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please input data
          </DialogContentText>
          <ImageUploader
            withIcon={false}
            withPreview={true}
            singleImage={true}
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button className={classes.button} onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default UpdateDialog
