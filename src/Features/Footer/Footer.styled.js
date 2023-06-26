import styled from "styled-components";
export const OuterContainer = styled.div`
  padding: 50px 0;
  background-image: url(${require("./../../Assets/subscribe.jpg")});
  background-size: cover;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.75;
    left: 0;
    top: 0;
  }
  .container {
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .image img {
    margin-bottom: 60px;
  }
  h2 {
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: normal;
    padding: 20px;
    border-bottom: 1px solid #fff;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }
  .social span {
    color: #fff;
    font-size: 30px;
    margin: 0 10px;
    cursor: pointer;
  }
  .social span:hover {
    color: #19c8fa;
  }
  p {
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
