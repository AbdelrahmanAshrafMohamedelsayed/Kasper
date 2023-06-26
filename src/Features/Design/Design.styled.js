import styled from "styled-components";
export const Design1 = styled.div`
  position: relative;
  padding: 100px 0;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;

  /* overlay */
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    top: 0;
    left: 0;
  }
  .text {
    @media (max-width: 992px) {
      text-align: center;
    }
    flex: 1;
    color: #fff;
    padding: 50px;
    z-index: 1;
    background-color: #0c5771;
    h2 {
      font-weight: normal;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    ul {
      list-style: none;
    }
    li {
      display: flex;
      padding: 15px 0;
      /* align-items: center; */
      /* margin-bottom: 20px; */
    }
    @media (max-width: 992px) {
      li {
        justify-content: center;
      }
    }
    /* li p {
      font-size: 20px;
      font-weight: normal;
    } */
    li span {
      margin-right: 20px;
      font-size: 20px;
      position: relative;
      top: -1px;
    }
  }
`;
export const Image = styled.div`
  position: relative;
  z-index: 1;
  bottom: -125px;
  flex: 1;
  display: flex;
  justify-content: space-around;

  /* Medium */
  @media (max-width: 992px) {
    display: none;
  }
`;
