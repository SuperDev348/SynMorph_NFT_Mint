import styled from "styled-components";

export const Styles = styled.div`
  .mint {
    position: relative;
    .backdrop {
      z-index: 100;
      color: '#fff';
    }
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
        padding: 85px 10px;
        .title {
          font-family: 'Audiowide';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 51px;
          color: #2FDBE7;
          text-align: center;
        }
        .description {
          font-family: 'Roboto Mono';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 21px;
          text-align: center;
        }
        .form {
          padding: 65px 0px;
          .subtitle {
            font-family: 'Audiowide';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 31px;
            text-align: center;
            color: #23DEE5;
            padding: 10px 0px;
          }
          .form-element {
            padding: 20px 0px;
            display: flex;
            justify-content: center;
            input {
              width: 260px;
              height: 33px;
              background-color: black;
              border: 1px solid #136891;
              box-shadow: 1px -1px 20px 3px #136891;
              color: white;
              outline: none;
            }
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
                border-right: 20px solid #07293a;
                position: absolute;
                top: 0px;
                left: -19px;
              }
              .arrow-left1 {
                position: absolute;
                left: -44px;
                top: -4px;
                height: 43px;
              }
              .arrow-left2 {
                position: absolute;
                left: -31px;
                top: -4px;
                height: 43px;
              }
              .arrow-right {
                width: 0; 
                height: 0; 
                border-top: 18px solid transparent;
                border-bottom: 18px solid transparent;
                border-left: 20px solid #040321;
                position: absolute;
                top: 0px;
                right: -19px;
              }
              .arrow-right1 {
                position: absolute;
                right: -44px;
                top: -4px;
                height: 43px;
              }
              .arrow-right2 {
                position: absolute;
                right: -31px;
                top: -4px;
                height: 43px;
              }
            }
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
          padding: 85px 0px;
        }
      }
    }
    .back-image {
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 1000px;
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
  }
`;
