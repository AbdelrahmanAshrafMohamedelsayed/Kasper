import styled from "styled-components";
export const Container = styled.div`
  padding: 100px 0;
  background-image: url(${require("./../../Assets/quote.jpg")});
  background-size: cover;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 75%);
  }
  /* margin-bottom: 100px; */
`;
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;

  /* Small */
  @media (min-width: 768px) {
    width: 750px;
  }
  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }
  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
  q {
    font-size: 30px;
    margin-bottom: 20px;
    display: block;
  }
  p {
    font-size: 15px;
    color: #fff;
  }
`;
