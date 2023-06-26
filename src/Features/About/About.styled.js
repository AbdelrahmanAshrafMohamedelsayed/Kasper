import styled from "styled-components";
export const MMContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  text-align: center;
  overflow: hidden;
  padding-top: 100px;
  img {
    text-align: center;
    max-width: 100%;
    /* width: 100%; */
    position: relative;
    bottom: -120px;
    margin: 0 auto;
    margin-top: -120px;
  }
`;
export const Heading = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    position: relative;
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 70px;
    text-transform: uppercase;
  }
  h2::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 2px;
    background-color: #000;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  h2::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    bottom: -27.5px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000;
    z-index: 3;
  }
  p {
    text-align: center;
    font-size: 18px;
    color: #777;
    max-width: 600px;
    margin: 0 auto;
  }
  margin-bottom: 100px;
`;
