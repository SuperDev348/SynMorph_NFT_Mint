import styled from "styled-components";

export const Styles = styled.div`
  .regular-button {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    padding: 14px 0px;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(19, 104, 145, 0.4) 0%, rgba(10, 3, 81, 0.4) 100%);
    border: 0.3px solid #0c4b64;
    backdrop-filter: blur(27.5px);
    width: 260px;
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
    .left-cap {
      position: absolute;
      height: 62px;
      left: 3px;
      top: 0px;
    }
    .right-cap {
      position: absolute;
      height: 62px;
      right: 3px;
      top: 0px;
    }
    .small-cap {
      height: 55px;
      top: -2px;
    }
  }
  .small-button {
    width: 170px;
    font-size: 16px;
    line-height: 21px;
  }
`;
