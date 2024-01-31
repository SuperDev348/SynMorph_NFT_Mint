import styled from "styled-components";

export const Styles = styled.div`
  .gametheory {
    position: relative;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 45px 85px 0px 85px;
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
    .main {
      .board {
        padding: 390px 10px 85px 10px;
        @media screen and (max-width: 600px) {
          padding: 85px 10px;
        }
        .title {
          font-family: 'Audiowide';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 51px;
          text-align: center;
          color: #AF4EFC;
          @media screen and (max-width: 600px) {
            padding: 100px 0px 0px 0px;
          }
        }
        .description {
          font-family: 'Roboto Flex';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          /* identical to box height */
          text-align: center;
        }
        .form-element {
          padding: 20px 0px;
          display: flex;
          justify-content: center;
          .mint-button {
            cursor: pointer;
            position: relative;
            width: 130px;
            background: linear-gradient(90deg, rgba(19, 104, 145, 0.4) 7.36%, rgba(10, 3, 81, 0.4) 99.71%);
            border-top: 0.3px solid #043f56;
            border-bottom: 0.3px solid #043f56;
            backdrop-filter: blur(27.5px);
            .text {
              font-family: 'Roboto Mono';
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              text-align: center;
            }
            .arrow-left {
              width: 0;
              height: 0;
              border-top: 18px solid transparent;
              border-bottom: 18px solid transparent;
              border-right: 20px solid #103142;
              position: absolute;
              top: 0px;
              left: -19px;
            }
            .arrow-left1 {
              position: absolute;
              left: -48px;
              top: -5px;
              height: 50px;
            }
            .arrow-left2 {
              position: absolute;
              left: -31px;
              top: -4px;
              height: 47px;
            }
            .arrow-right {
              width: 0; 
              height: 0; 
              border-top: 18px solid transparent;
              border-bottom: 18px solid transparent;
              border-left: 20px solid #0e0d2b;
              position: absolute;
              top: 0px;
              right: -19px;
            }
            .arrow-right1 {
              position: absolute;
              right: -48px;
              top: -5px;
              height: 50px;
            }
            .arrow-right2 {
              position: absolute;
              right: -31px;
              top: -4px;
              height: 47px;
            }
          }
          .token-detail {
            max-width: 300px;
            .detail-item {
              display: flex;
              align-items: center;
              padding: 5px;
              .subtitle {
                font-family: 'Roboto Flex';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                /* identical to box height */
                text-align: left;
                color: #01FFFF;
                min-width: 100px;
              }
              .description {
                font-family: 'Roboto Flex';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                /* identical to box height */
                text-align: left;
              }
              img {
                width: 100%;
              }
            }
          }
        }
        
      }
    }
    .intro-item {
      padding: 55px 20px;
      .subtitle {
        font-family: 'Audiowide';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        color: #01FFFF;
      }
      .description {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */
        text-align: left;
      }
    }
    .back-image-up {
      position: absolute;
      top: 90px;
      right: 0px;
      height: 915px;
      z-index: -10;
      @media screen and (max-width: 1100px) {
        height: 800px;
      }
      @media screen and (max-width: 980px) {
        height: 600px;
      }
      @media screen and (max-width: 780px) {
        height: 500px;
      }
      @media screen and (max-width: 600px) {
        height: 350px;
      }
    }
    .back-image-down {
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 570px;
      z-index: -10;
      @media screen and (max-width: 1100px) {
        height: 500px;
      }
      @media screen and (max-width: 980px) {
        height: 450px;
      }
      @media screen and (max-width: 780px) {
        height: 400px;
      }
      @media screen and (max-width: 600px) {
        height: 350px;
      }
    }
    .footer {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: rgba(255,255,255,0.9);
      padding: 79px 0px 65px 0px;
      @media screen and (max-width: 600px) {
        padding: 150px 0px 60px 0px;
      }
    }
  }
`;
