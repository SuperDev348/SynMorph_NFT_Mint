import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import {Link} from 'react-router-dom'

import { Styles } from './style/roadmapStyle'
import RegularButton from "../components/regularButton";

const Roadmap = () => {

  return (
    <Styles>
      <div className="roadmap">
        <div className="header">
          <div className="menu">
            <Link to="/">
              <RegularButton text="Home" />
            </Link>
          </div>
          <div className="logo">
            <img src="/image/logo.png" />
          </div>
        </div>
        <div className="board">
          <Grid className="intro" container>
            <Grid item md={5} xs={12} className="panel">
              <div className="title">ROAD MAP</div>
              <div className="mobile-field">
                <img src="/image/roadmap-mobile.png" />
              </div>
            </Grid>
            <Grid item md={7} xs={12} className="intro-image">
            </Grid>
          </Grid>
          <Grid className="map" container>
            <Grid item md={7} xs={12} className="main">
              <div id="lines-3" className="lines">
                <img src="/image/left-lines.png" />
              </div>
              <div className="panel">
                <div className="map-image-field">
                  <div className="map-image-board">
                    <img className="back" src="/image/map-back.png" />
                    <img className="icon" src="/image/map-icon1.png" />
                  </div>
                </div>
                <div className="title-field">
                  <div className="title">Project Launch</div>
                  <div className="description">Official unveiling of the Synmorph NFT collection and the start of the minting process.</div>
                  <div className="number">1</div>
                </div>
              </div>
              <div id="lines-1" className="lines">
                <img src="/image/right-lines.png" />
              </div>
            </Grid>
            <Grid item md={5} xs={12} className="blank">
            </Grid>
          </Grid>
          <Grid className="map" container>
            <Grid item md={5} xs={12} className="blank">
            </Grid>
            <Grid item md={7} xs={12} className="main">
              <div className="panel">
                <div className="map-image-field">
                  <div className="map-image-board">
                    <img className="back" src="/image/map-back.png" />
                    <img className="icon" src="/image/map-icon2.png" />
                  </div>
                </div>
                <div className="title-field">
                  <div className="title">Community Building</div>
                  <div className="description">Focusing on growing a dedicated community of Synthlords through engaging events, social media interaction, and collaborations. All through the powers of twitter! Any Synthlord can effortlessly become twitter famous. 
                  #SynthsFollowSynths 
                  </div>
                  <div className="number">2</div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid className="map" container>
            <Grid item md={7} xs={12} className="main">
              <div id="lines-3" className="lines">
                <img src="/image/left-lines.png" />
              </div>
              <div className="panel">
                <div className="map-image-field">
                  <div className="map-image-board">
                    <img className="back" src="/image/map-back.png" />
                    <img className="icon" src="/image/map-icon3.png" />
                  </div>
                </div>
                <div className="title-field">
                  <div className="title">Game Theory Mechanics</div>
                  <div className="description">Incorporating game theory elements into the Synmorph ecosystem to enhance engagement and interaction among the community, with rewards for participation through potential use of a burn mechanism.</div>
                  <div className="number">3</div>
                </div>
              </div>
              <div id="lines-4" className="lines">
                <img src="/image/right-lines.png" />
              </div>
            </Grid>
            <Grid item md={5} xs={12} className="blank">
            </Grid>
          </Grid>
          <Grid className="map" container>
            <Grid item md={5} xs={12} className="blank">
            </Grid>
            <Grid item md={7} xs={12} className="main">
              <div className="panel">
                <div className="map-image-field">
                  <div className="map-image-board">
                    <img className="back" src="/image/map-back.png" />
                    <img className="icon" src="/image/map-icon4.png" />
                  </div>
                </div>
                <div className="title-field">
                  <div className="title">Exclusive NFT Drops</div>
                  <div className="description">Introducing limited edition and exclusive NFT drops to reward early adopters and dedicated community members, fostering loyalty!</div>
                  <div className="number">4</div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid className="map" container>
            <Grid item md={7} xs={12} className="main">
              <div id="lines-3" className="lines">
                <img src="/image/left-lines.png" />
              </div>
              <div className="panel">
                <div className="map-image-field">
                  <div className="map-image-board">
                    <img className="back" src="/image/map-back.png" />
                    <img className="icon" src="/image/map-icon5.png" />
                  </div>
                </div>
                <div className="title-field">
                  <div className="title">Enigmatic Gamification</div>
                  <div className="description">A potential gamification of Synmorph characters to bring a new level of excitement to the Synmorphs virtual ecosystem!</div>
                  <div className="number">5</div>
                </div>
              </div>
            </Grid>
            <Grid item md={5} xs={12} className="blank">
            </Grid>
          </Grid>
          <div className='footer'>
            <div className="text">
              A project by nitefury
            </div>
            <img src="/image/footer.png"/>
          </div>
        </div>
        <img className="back-image" src="/image/roadmap.png" />
      </div>
    </Styles>
  );
}
export default Roadmap
