import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { 
  Grid, 
  Container,
  Backdrop,
  CircularProgress
} from "@material-ui/core";
import { NotificationManager } from 'react-notifications'

import siteConfig from "../config/site.config";
import { useSetting } from "../provider/setting";
import { Styles } from './style/mintStyle'
import RegularButton from '../components/regularButton'
import { owner, getTotalSupply, mint, getMintPrice } from "../api/nft";
import { uploadMetadata } from "../api/file";
import { getTokens } from '../api/nft'
import metadataJson from '../config/metadata.json'

const Mint = () => {
  const [setting] = useSetting()
  const [ownerAddress, setOwnerAddress] = useState('')
  const [name, setName] = useState('')
  const [totalNumber, setTotalNumber] = useState(0)
  const [pending, setPending] = useState(false)

  const validate = async () => {
    let res = true
    if (setting.address == '' || name == '') {
      res = false
      NotificationManager.warning('Please set name and connect wallet.', 'Warning', 3000);
    }
    if (name.length > 8) {
      res = false
      NotificationManager.warning('The name cannot be longer than 8 Characters!', 'Warning', 3000);
    }
    const tokens = await getTokens()
    const isFound = tokens.some(element => {
      if (element.name.trim() === name.trim()) {
        return true;
      }
      return false;
    });
    if (isFound) {
      res = false
      NotificationManager.warning('This name has already been taken', 'Warning', 3000);
    }
    return res
  }
  const handleMint = async () => {
    const validateResult = await validate()
    if (!validateResult)
      return
    setPending(true)
    const totalSupply = await getTotalSupply()
    const tokenId = parseInt(totalSupply) + 1
    const metadata = {
      ...metadataJson,
      image: `${siteConfig.BASE_URI}/${tokenId}.jpg`,
      file_url: `${siteConfig.BASE_URI}/${tokenId}.jpg`,
      name: name
    }
    const metaCid = await uploadMetadata(metadata, `${tokenId}.json`)
    const metaURI = `https://ipfs.io/ipfs/${metaCid}/${tokenId}.json`
    let mintCost = 0
    try {
      if (setting.address != ownerAddress)
        mintCost = await getMintPrice()
      await mint(metaURI, setting.address, mintCost)
      NotificationManager.success('Congratulations!', 'Success', 3000);
    } catch (error) {
      console.log(error)
      NotificationManager.warning(error.message, 'Worning', 3000);
    }
    setPending(false)
    setName('')
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await owner()
        setOwnerAddress(res)
        const total = await getTotalSupply()
        setTotalNumber(total)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <Styles>
      <div className="mint">
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
            <Grid item sm={7} xs={12}>
            </Grid>
            <Grid item sm={5} xs={12} className="main">
              <div className="board">
                <div className="title">Total minted</div>
                <div className="description">{totalNumber==0?'_':totalNumber} of 555</div>
                <div className="form">
                  <div className="subtitle">How shall the Synthlords call upon you?</div>
                  <div className="description">Enter the name of your synmorph in the box below</div>
                  <div className="description">(Max 8 characters long)</div>
                  <div className="form-element">
                    <input className="name" value={name} onChange={(event) => setName(event.target.value)} />
                  </div>
                  <div className="form-element">
                    <div className="mint-button" onClick={() => handleMint()}>
                      <div className="arrow-left"></div>
                      <div className="text">Summon your Synmorph!</div>
                      <div className="arrow-right"></div>
                      <img className="arrow-left1" src="/image/mint-button-left1.png" />
                      <img className="arrow-left2" src="/image/mint-button-left2.png" />
                      <img className="arrow-right1" src="/image/mint-button-right1.png" />
                      <img className="arrow-right2" src="/image/mint-button-right2.png" />
                    </div>
                  </div>
                </div>
                <div className='footer'>
                  A project by nitefury
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <img className="back-image" src="/image/mint-back.png" />
      </div>
    </Styles>
  );
}
export default Mint
