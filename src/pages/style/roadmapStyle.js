import styled from "styled-components";

export const Styles = styled.div`
  display: flex; 
  justify-content: center;
  .roadmap {
    max-width: 1440px;
    position: relative;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 45px 50px 0px 50px;
      @media screen and (max-width: 1400px) {
        padding: 45px 10px 0px 10px;
      }
      @media screen and (max-width: 650px) {
        display: block;
      }
      .logo {
        @media screen and (max-width: 650px) {
          display: flex;
          justify-content: center;
          padding: 10px 0px;
        }
        img {
          width: 118px;
          height: 118px;
        }
      }
      .menu {
        @media screen and (max-width: 650px) {
          display: flex;
          justify-content: center;
          padding: 10px 0px;
        }
        a {
          text-decoration: none;
        }
      }
    }
    .board {
      padding: 0px 90px;
      @media screen and (max-width: 1400px) {
        padding: 0px 10px;
      }
      .intro {
        .panel {
          .title {
            text-align: left;
            font-family: 'Audiowide';
            font-style: normal;
            font-weight: 400;
            font-size: 128px;
            line-height: 163px;
            padding: 180px 0px;
            @media screen and (max-width: 950px) {
              font-size: 120px;
              padding: 40px 0px 0px 0px;
              text-align: center;
            }
            @media screen and (max-width: 730px) {
              font-size: 70px;
            }
            @media screen and (max-width: 450px) {
              font-size: 40px;
            }
          }
          .mobile-field {
            display: none;
            margin-top: -55px;
            @media screen and (max-width: 960px) {
              display: flex;
              justify-content: center;
            }
            img {
              width: 100%;
              max-width: 400px;
            }
          }
        }
        .intro-image {
          img {
            max-width: 723px;
            width: 100%;
            @media screen and (max-width: 600px) {
              display: none;
            }
          }
        }
      }
      .map {
        .main {
          padding: 10px 0px;
          .panel {
            border: solid 1px white;
            display: flex;
            @media screen and (max-width: 600px) {
              display: block;
            }
            .map-image-field {
              display: flex;
              justify-content: center;
              .map-image-board {
                position: relative;
                width: 270px;
                height: 270px;
                .back {
                  position: absolute;
                  top: -73px;
                  left: -65px;
                }
                .icon {
                  position: absolute;
                  top: 85px;
                  left: 85px;
                }
              }
            }
            .title-field {
              border-left: solid 1px white;
              position: relative;
              @media screen and (max-width: 600px) {
                border-top: solid 1px white;
              }
              .title {
                font-family: 'Audiowide';
                font-style: normal;
                font-weight: 400;
                font-size: 36px;
                line-height: 46px;
                text-align: center;
                padding: 15px 40px;
              }
              .description {
                font-family: 'Roboto Flex';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                padding: 0px 30px;
              }
              .number {
                font-family: 'Audiowide';
                font-style: normal;
                font-weight: 400;
                font-size: 64px;
                line-height: 82px;
                position: absolute;
                top: 0px;
                right: 0px;
              }
            }
          }
          .lines {
            position: relative;
            height: 220px;
            @media screen and (max-width: 960px) {
              display: none;
            }
          }
          #lines-1 {
            img {
              position: absolute;
              right: 0px;
            }
          }
          #lines-3 {
            img {
              position: absolute;
              right: 0px;
            }
          }
          #lines-4 {
            img {
              position: absolute;
              right: 0px;
            }
          }
        }
        .blank {
          .blank-board {
            height: 225px;
          }
          @media screen and (max-width: 960px) {
            display: none;
          }
          .blank-text {
            width: 100%;
          }
        }
      }
      .footer {
        position: relative;
        .text {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: rgba(255,255,255,0.9);
          padding: 135px 0px 135px 0px;
        }
        img {
          width: 100%;
          position: absolute;
          left: 0px;
          bottom: 0px;
          z-index: -10;
        }
      }
    }
    .back-image {
      position: absolute;
      top: 3px;
      right: 105px;
      height: 1000px;
      z-index: -10;
      @media screen and (max-width: 1100px) {
        height: 800px;
      }
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
  }
`;
