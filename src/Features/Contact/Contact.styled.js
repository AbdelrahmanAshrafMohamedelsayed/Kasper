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
  max-width: 100%;
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
  #myTextarea {
    resize: none; /* Disable user-resizing */
    overflow: hidden; /* Hide any overflowing content */
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  form {
    flex-basis: 70%;
  }
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 20px;
    border: 1px solid #19c8fa;
    margin-bottom: 20px;
    outline: none;
    font-size: 20px;
    color: #333;
  }
  input[type="submit"] {
    padding: 20px;
    border: none;
    outline: none;
    font-size: 20px;
    color: #fff;
    background-color: #19c8fa;
    cursor: pointer;
    transition: 0.3s;
    /* margin-left: calc(100% - 40px); */
  }
  .a {
    text-align: right;
  }
  textarea {
    width: 100%;
    padding: 20px;
    border: 1px solid #19c8fa;
    margin-bottom: 20px;
    outline: none;
    font-size: 20px;
    color: #333;
    min-height: 200px;
  }
  textarea::placeholder {
    color: #777;
    font-size: 16px;
  }
  input::placeholder {
    color: #777;
    font-size: 16px;
  }
  /* Medium */
  @media (max-width: 992px) {
    flex-direction: column-reverse;

    form {
      flex-basis: 100%;
    }
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
export const Content = styled.div`
  flex-basis: 25%;
  @media (max-width: 992px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
  h4 {
    text-transform: uppercase;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
  }
  p {
    color: #777;
    margin-bottom: 10px;
  }
  h4.a2 {
    margin-top: 90px;
  }
`;
export const Box = styled.div``;
