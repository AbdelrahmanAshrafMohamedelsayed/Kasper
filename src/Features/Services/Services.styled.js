import styled from "styled-components";
export const Serv = styled.div`
  padding: 100px 0;
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
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
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
  display: flex;
  overflow: hidden;
  /* Small */
  max-width: 100%;
  span {
    font-size: 60px;
    font-weight: 800;
    margin-right: 50px;
  }

  h3 {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    color: #88c8fa;
  }
  p {
    font-size: 16px;
    color: #777;
    line-height: 2;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    span {
      /* margin: 0 auto; */
      margin-right: 0;
    }
  }
`;
