import styled from "styled-components";
export const OuterContainer = styled.div`
  padding: 100px 0;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #fff;
    background-color: #19c8fa;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    display: block;
    width: fit-content;
    &:hover {
      background-color: #000;
      color: #fff;
    }
    margin: 20px auto;
  }
  ul {
    display: flex;
    list-style: none;
    /* text-align: center; */
    /* margin: 0 auto; */
    justify-content: center;
  }

  li {
    /* margin: 0 10px; */
    font-size: 18px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 10px 20px;
  }
  li:hover {
    color: #fff;
    background-color: #19c8fa;
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
export const Boxs = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  position: relative;
  overflow: hidden;
  /* flex-basis: 25%; */
  /* Small */
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  /* Medium */
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
  /* Large */
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`;
export const Text = styled.div`
  position: absolute;
  bottom: -100%;
  transition: 0.3s;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 15px;

  h3 {
    padding-left: 10px;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #19c8fa;
  }
  p {
    padding-left: 10px;
    font-size: 14px;
  }
`;

export const Image = styled.div`
  /* :hover + div {
    bottom: 0;
  } */
  overflow: hidden;
  img {
    width: 100%;
    transition: 0.3s;
    height: 100%;
  }

  /* img:hover {
    transform: rotate(3deg) scale(1.1);
  }
  img:hover + ${Text} {
    bottom: 0;
  } */
  &:hover {
    img {
      transform: rotate(3deg) scale(1.1);
    }

    + ${Text} {
      bottom: 0;
    }
  }
`;
