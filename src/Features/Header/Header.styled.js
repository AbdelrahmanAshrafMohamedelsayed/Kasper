import styled from "styled-components";
export const MHeader = styled.header`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;
export const MMContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 97px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: calc(100% - 30px);
    background-color: #a2a2a2;
    left: 50%;
    transform: translateX(-50%);
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
export const Logo = styled.a`
  text-decoration: none;
  img {
    height: 40px;
  }
`;
export const NAV = styled.nav`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* position: relative; */

  flex: 1;
  /* justify-content: flex-end; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    list-style: none;
    display: flex;
  }
  ul a {
    display: block;
    padding: 40px 10px;
    font-size: 14px;
    transition: 0.3s;
    text-decoration: none;
    color: #fff;
    position: relative;
    z-index: 2;
  }
  ul a:hover {
    color: #1eb7f4;
    border-bottom: 1px solid #1eb7f4;
  }
  .Form {
    width: 40px;
    height: 30px;
    position: relative;
    border-left: 1px solid #fff;
    margin-left: 30px;
    cursor: pointer;
  }

  .Form span.search {
    font-size: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .bars {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    .bars {
      display: none;
    }
  }
  @media (max-width: 768px) {
    ul {
      display: none;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #00000096;
    }
    ul a {
      padding: 15px 20px;
    }
  }
  ul a.active {
    color: #1eb7f4;
    border-bottom: 1px solid #1eb7f4;
  }
`;
