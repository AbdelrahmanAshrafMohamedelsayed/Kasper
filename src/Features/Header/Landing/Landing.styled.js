import styled from "styled-components";
export const Landing1 = styled.div`
  color: #fff;
  position: relative;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  height: calc(100vh);
  /* make overlay */
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .left {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    z-index: 1;
  }
  .right {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    z-index: 1;
  }
  @media (max-width: 768px) {
    .right,
    .left {
      display: none;
    }
  }
  ul {
    list-style: none;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  li {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0 5px;
    cursor: pointer;
  }
`;
export const Text = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 50%;
  max-width: 100%;
  background-color: #135f75;
  padding: 50px;
  display: flex;
  justify-content: flex-end;
  /* Small */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  width: 500px;
  max-width: 100%;
  h2 {
    font-size: 32px;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 2;
  }
`;
