import styled from "styled-components";

export const Styles = styled.div`
  display: flex; 
  justify-content: center;
  .home {
    max-width: 1440px;
    .header {
      display: flex;
      justify-content: space-between;
      padding: 45px 85px 0px 85px;
      @media screen and (max-width: 1400px) {
        padding: 45px 10px 0px 10px;
      }
      .logo {
        img {
          width: 118px;
          height: 118px;
        }
      }
    }
    .board {
      padding: 0px 140px;
      @media screen and (max-width: 1400px) {
        padding: 0px 10px;
      }
      .title {
        text-align: center;
        font-family: 'Audiowide';
        font-style: normal;
        font-weight: 400;
        font-size: 156px;
        margin-top: -45px;
        @media screen and (max-width: 950px) {
          font-size: 120px;
          margin-top: 0px;
        }
        @media screen and (max-width: 730px) {
          font-size: 70px;
        }
        @media screen and (max-width: 450px) {
          font-size: 40px;
        }
      }
      .intro {
        margin-top: -90px;
        .description {
          padding: 180px 0px 10px 0px;
          font-family: 'Roboto Mono';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 53px;
          @media screen and (max-width: 960px) {
            padding: 30px 0px 10px 0px;
            margin-top: -130px;
            text-align: center;
          }
        }
        .back {
          display: flex;
          justify-content: center;
          position: relative;
          .back-image {
            width: 430px;
            @media screen and (max-width: 1100px) {
              width: 380px;
            }
            @media screen and (max-width: 960px) {
              display: none;
            }
          }
          .button-field {
            padding: 0px 10px;
            position: absolute;
            bottom: -25px;
            a {
              text-decoration: none;
            }
            @media screen and (max-width: 960px) {
              display: flex;
              justify-content: center;
              padding: 20px 0px;
              position: unset;
            }
          }
          
        }
        .panel {
          position: relative;
          .button-field {
            padding: 0px 10px;
            position: absolute;
            bottom: 160px;
            a {
              text-decoration: none;
            }
            @media screen and (max-width: 960px) {
              display: flex;
              justify-content: center;
              padding: 20px 0px;
              position: unset;
            }
          }
          .road-map {
            left: 0px;
          }
          .connect-wallet {
            right: 0px;
          }
        }
        .mobile-field {
          display: flex;
          justify-content: center;
          .mobile-back-image {
            padding: 100px 0px;
            display: none;
            @media screen and (max-width: 960px) {
              display: block;
              width: 100%;
              max-width: 400px;
            }
          }
        }
      }
      .twitter {
        display: flex;
        justify-content: center;
        padding: 100px;
        img {
          width: 70px;
        }
      }
      .map {
        display: flex;
        padding: 10px 0px;
        .map-item {
          width: 20%;
          padding: 26px;
          margin: 0px 15px;
          border: solid 1px white;
          position: relative;
          .nft {
            width: 100%;
          }
          .blur {
            position: absolute;
            left: calc(100% * 2 / 3 * -1);
            top: calc(100% / 3 * -1);
            z-index: -10;
            width: 250%;
            @media screen and (max-width: 960px) {
              display: none;
            }
          }
          @media screen and (max-width: 1100px) {
            padding: 20px;
            margin: 0px 15px;
          }
          @media screen and (max-width: 950px) {
            padding: 15px;
            margin: 0px 10px;
          }
          @media screen and (max-width: 760px) {
            padding: 10px;
            margin: 0px 5px;
          }
          @media screen and (max-width: 500px) {
            width: calc(100% - 30px);
          }
        }
        @media screen and (max-width: 500px) {
          display: block;
        }
      }
    }
  }
`;
