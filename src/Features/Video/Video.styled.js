import styled from "styled-components";
export const OuterContainer = styled.div`
  /* padding: 100px 0; */
  /* overflow: hidden; */
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    top: 0;
    left: 0;
  }
  video {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
  }
  .text {
    position: absolute;
    top: 50%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 1;
    background-color: rgb(25 200 250 / 72%);
    padding: 20px;
    width: 100%;
    /* opacity: 0.8; */
  }
  h2 {
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 25px;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 15px;
  }
  button {
    border: none;
    outline: none;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    /* opacity: 1 !important; */
  }
`;
