import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { 
  Grid, 
  Container,
  Backdrop,
  CircularProgress
} from "@material-ui/core";
import { NotificationManager } from 'react-notifications'

import { useSetting } from "../provider/setting";
import { Styles } from './style/gametheoryStyle'
import RegularButton from '../components/regularButton'
import { confirmChange, availableTokenId, getToken } from "../api/nft";

const Gametheory = () => {
  const [setting] = useSetting()
  const [pending, setPending] = useState(false)
  const [tokenId, setTokenId] = useState(0)
  const [tokenData, setTokenData] = useState({})

  const handleConfirm = async () => {
    if (setting.address == '' || tokenId == 0)
      return
    setPending(true)
    try {
      await confirmChange(setting.address, tokenId)
      NotificationManager.success('Summoned!', 'Success', 3000);
    } catch (error) {
      console.log(error)
      NotificationManager.warning(error.message, 'Warning', 3000);
    }
    await refresh()
    setPending(false)
  }
  const refresh = async () => {
    try {
      const id = await availableTokenId(setting.address)
      if (id != 0) {
        setTokenId(id)
        const data = await getToken(id)
        setTokenData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    refresh()
  }, [setting.address])
  return (
    <Styles>
      <div className="gametheory">
        <Backdrop open={pending} style={{zIndex: 9999}}>
          <CircularProgress color="primary" />
        </Backdrop>
        <div className="header">
          <div className="menu">
            <Link to="/">
              <RegularButton text="Home" isSmall={true} />
            </Link>
          </div>
          <div className="logo">
            <img src="/image/logo.png" />
          </div>
        </div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={7} xs={12} className="main">
              <div className="board">
                <div className="title">Is your fate entwined with the fate of the synth concil?</div>
                <div className="description">Reveal your Synmorph’s true purpose.</div>
                {tokenId != 0 && 
                  <div className="form-element">
                    <div className="token-detail">
                      <div className="detail-item">
                        <div className="subtitle">Token ID: </div>
                        <div className="description">{tokenData.tokenId}</div>
                      </div>
                      <div className="detail-item">
                        <div className="subtitle">Token Name: </div>
                        <div className="description">{tokenData.name}</div>
                      </div>
                      <div className="detail-item">
                        <div className="subtitle">Your new Avatar: </div>
                        <img src={tokenData.new_image} />
                      </div>
                    </div>
                  </div>
                }
                <div className="form-element">
                  <div className="mint-button" onClick={() => handleConfirm()}>
                    <div className="arrow-left"></div>
                    <div className="text">Select your Synmorph!</div>
                    <div className="arrow-right"></div>
                    <img className="arrow-left1" src="/image/burn-button-left1.png" />
                    <img className="arrow-left2" src="/image/burn-button-left2.png" />
                    <img className="arrow-right1" src="/image/burn-button-right1.png" />
                    <img className="arrow-right2" src="/image/burn-button-right2.png" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={5} xs={12}>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={4} xs={12} className="intro-item">
              <div className="subtitle">DEEP WITHIN THE  REALM OF SYNMORPH’S LAIR</div>
              <div className="description">A cryptic game awaits, if you dare. Where human creativity and AI entwine.</div>
            </Grid>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={4} xs={12}>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={4} xs={12} className="intro-item">
              <div className="subtitle">IN THIS ENIGMATIC WORD OF ART AND CODE</div>
              <div className="description">A hidden path for the worthy bestowed. Seek the truth, embrace the unknown, Unlock the riddles, as your skills have grown.</div>
            </Grid>
            <Grid item sm={4} xs={12}>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={4} xs={12} className="intro-item">
              <div className="subtitle">FOR AS SYNMORPH’S WONDERS CONTINUE TO RISE</div>
              <div className="description">A clandestine quest lies before your eyes. Embark on the journey, embrace the change, In this mysterious land, nothing remains the same.</div>
            </Grid>
          </Grid>
          <div className='footer'>
            A project by nitefury
          </div>
        </Container>
        <img className="back-image-up" src="/image/game-back1.png" />
        <img className="back-image-down" src="/image/game-back2.png" />
      </div>
    </Styles>
  );
}
export default Gametheory
