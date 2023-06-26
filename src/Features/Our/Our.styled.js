import styled from "styled-components";
export const Container = styled.div`
  padding: 100px 0;
`;
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;

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
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 15px;
    color: #777;
    max-width: 600px;
    margin: 0 auto;
    line-height: 2;
    margin-bottom: 60px;
  }
`;
export const TESTIMONIALS = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-basis: 45%;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  ul {
    list-style: none;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  li {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #19c8fa;
    margin: 0 5px;
    cursor: pointer;
  }
`;
export const TestCont = styled.div``;
export const TestElement = styled.div`
  display: flex;
  /* Small */

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 60px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    img {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .txt {
    line-height: 2;
    border-bottom: 1px solid #ccc;
    margin: 15px auto;
  }
  .txt p.a1 {
  }
  .txt p.a2 {
    color: #777;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: right;
  }
`;
export const Skills = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-basis: 45%;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
export const ProgS = styled.div``;
export const Prog = styled.div`
  margin-bottom: 30px;
  h4 {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
  }
  .wid {
    height: 25px;
    background-color: #ccc;
    position: relative;
    border-radius: 5px;
  }
  .wid span {
    position: relative;
    height: 25px;
    z-index: 2;
    display: block;
    background-color: #19c8fa;
    width: ${(props) => props.percentage};
  }
  .wid span::after {
    content: "${(props) => props.percentage}";
    position: absolute;
    right: -15px;
    top: -26px;
    height: 19px;
    width: 30px;
    border-radius: 2px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 10px;
  }
  /* arrow to down */
  .wid span::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #000;
    border-bottom: 8px solid transparent;
    right: -8px;
    top: -8px;
  }
`;
