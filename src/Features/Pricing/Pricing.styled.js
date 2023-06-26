import styled from "styled-components";
export const OuterContainer = styled.div`
  padding: 100px 0;
`;
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
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
export const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  justify-content: space-between;
`;
export const Box = styled.div`
  /* Small */
  /* flex: 1; */
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 768px) {
    flex-basis: 45%;
  }
  /* Medium */
  @media (min-width: 992px) {
    flex-basis: 45%;
  }
  /* Large */
  @media (min-width: 1200px) {
    flex-basis: 23%;
  }
  a {
    display: block;
    text-align: center;
    padding: 20px 20px;
    border: 1px solid #19c8fa;
    color: #5545af;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin: 30px auto;
    width: fit-content;
  }
`;

export const MMhead = styled.div`
  padding: 20px 20px;
  border-top: 1px solid #19c8fa;
  border-bottom: 1px solid #19c8fa;
  text-align: center;
  p.title {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  span {
    margin: 0;
    position: relative;
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  span::after {
    content: "$";
    position: absolute;
    font-size: 25px;
    top: -7px;
    left: -19px;
    font-weight: normal;
  }
  span::before {
    content: "/Mo";
    position: absolute;
    font-size: 15px;
    bottom: 15px;
    right: -41px;
    font-weight: bold;
  }
`;
export const NMhead = styled.div`
  p {
    padding: 20px;
    position: relative;
    text-align: center;
  }
  p:not(:last-child)::after {
    /* CSS properties */
    content: "";
    position: absolute;
    width: 50%;
    background-color: #19c8fa;
    height: 0.5px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  p:last-child {
    border-bottom: 1px solid #19c8fa;
  }
`;
export const Last = styled.div`
  text-align: center;
  margin: 50px auto;

  p {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  button {
    display: block;
    text-align: center;
    padding: 20px 30px;
    border: 1px solid #19c8fa;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin: 30px auto;
    width: fit-content;
    background-color: #19c8fa;
  }
`;
export const LastCont = styled.div`
  padding: 100px 0;
  position: relative;
  background-image: url(${require("./../../Assets/subscribe.jpg")});
  background-size: cover;
  color: #fff;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
  }
`;
export const LastinCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-right: 0 !important;
    form {
      margin-right: 0 !important;
    }
    form input[type="email"],
    form input[type="submit"] {
      width: calc(50% - 20px);
    }
  }
  form {
    display: flex;
    width: 500px;
    max-width: 90%;
    border: 1px solid #fff;
    position: relative;
    margin-right: 40px;
  }
  span {
    color: #fff;
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  input[type="email"] {
    flex: 1;
    padding: 20px 20px;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 14px;
    outline: none;
    margin-left: 40px;
  }
  input[type="email"]::placeholder {
    color: #fff;
    font-size: 14px;
  }
  input[type="submit"] {
    width: 130px;
    max-width: 100%;
    padding: 20px 20px;
    border: none;
    background-color: #19c8fa;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    outline: none;
    cursor: pointer;
  }

  P {
    flex: 1;
    line-height: 2;
  }
`;
