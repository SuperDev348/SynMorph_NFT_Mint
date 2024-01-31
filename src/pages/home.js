import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import {Link} from 'react-router-dom'
import { NotificationManager } from "react-notifications";

import { Styles } from './style/homeStyle'
import RegularButton from '../components/regularButton'
import Footer from "../components/footer";
import { getShortAddress } from '../service/string'
import { connect } from "../api/wallet";
import { useSetting } from "../provider/setting";
import { availableTokenId } from "../api/nft";

const Home = () => {
  const [setting, dispatch] = useSetting()
  const [hasChange, setHasChange] = useState(false)

  const handleConnect = () => {
    connect()
    .then((res) => {
      dispatch({type: 'SET', settingName: 'address', settingData: res.account})
    })
    .catch((error) => {
      NotificationManager.warning('Warning', error.message, 3000);
    })
  }

  useEffect(() => {
    (async() => {
      if (setting.address != '') {
        const res = await availableTokenId(setting.address)
        if (res != 0)
          setHasChange(true)
      }
    })()
  }, [setting.address])
  return (
    <Styles>
      <div className="home">
        <div className="header">
          <div className="menu"></div>
          <div className="logo">
            <img src="/image/logo.png" />
          </div>
        </div>
        <div className="board">
          <div className="title">AI-Synmorph</div>
          <Grid className="intro" container>
            <Grid item md={4} xs={12} className="panel">
              <div className="mobile-field">
                <img className="mobile-back-image" src="/image/1.png" />
              </div>
              <div className="description">Synergy between AI ingenuity and human creativity.</div>
              <div className="button-field road-map">
                <Link to="/roadmap">
                  <RegularButton text="Road Map" />
                </Link>
              </div>
            </Grid>
            <Grid item md={4} xs={12} className="back">
              <img className="back-image" src="/image/1.png" />
              {setting.address != '' &&
                <div className="button-field mint">
                  <Link to="/mint">
                    <RegularButton text="Mint" />
                  </Link>
                </div>
              }
              {hasChange &&
                <div className="button-field mint">
                  <Link to="/metamorph">
                    <RegularButton text="MetaMorph" />
                  </Link>
                </div>
              }
            </Grid>
            <Grid item md={4} xs={12} className="panel">
              <div className="button-field connect-wallet">
                <RegularButton text={setting.address == ''? "Connect Wallet" : getShortAddress(setting.address)} onClick={handleConnect} />
              </div>
            </Grid>
          </Grid>
          <div className="twitter">
            <a href="https://twitter.com/synmorph_ai">
              <img src="/image/twitter.png" />
            </a>
          </div>
          <div className="map">
            <div className="map-item">
              <img className="nft" src="/image/nft/1.png" />
              <img className="blur" src="/image/blur/1.png" />
            </div>
            <div className="map-item">
              <img className="nft" src="/image/nft/2.png" />
              <img className="blur" src="/image/blur/2.png" />
            </div>
            <div className="map-item">
              <img className="nft" src="/image/nft/3.png" />
              <img className="blur" src="/image/blur/3.png" />
            </div>
            <div className="map-item">
              <img className="nft" src="/image/nft/4.png" />
              <img className="blur" src="/image/blur/4.png" />
            </div>
            <div className="map-item">
              <img className="nft" src="/image/nft/5.png" />
              <img className="blur" src="/image/blur/5.png" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Styles>
  );
}
export default Home
