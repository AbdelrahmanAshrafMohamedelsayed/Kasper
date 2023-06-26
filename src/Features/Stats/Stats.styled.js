import styled from "styled-components";
export const Stats1 = styled.div`
  padding: 100px 0;
  background-image: url(${require("./../../Assets/stats.png")});
  background-size: cover;
  color: white;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
`;
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  background-color: #1e567a;
  padding: 50px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  } */
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
`;
export const Box = styled.div`
  margin: 10px auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (max-width: 768px) {
    /* width: 750px; */
    flex-basis: 100%;
  }
  /* Medium */
  @media (min-width: 992px) {
    flex-basis: 25%;
  }
  /* Large */
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
  text-align: center;
  span {
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .num {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
  }
`;
