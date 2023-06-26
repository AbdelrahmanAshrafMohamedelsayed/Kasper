import { OuterContainer } from "./Footer.styled";
import {
  BsEnvelope,
  BsEnvelopeAtFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <OuterContainer>
      <div className="container">
        <div className="image">
          <img src={require("./../../Assets/logo.png")} alt="Logo" />
          <h2>WE ARE SOCIAL</h2>
          <div className="social">
            <span>
              <BsFacebook />{" "}
            </span>
            <span>
              <BsTwitter />{" "}
            </span>
            <span>
              <BsLinkedin />{" "}
            </span>
            <span>
              <BsInstagram />{" "}
            </span>
          </div>
          <p>© 2021 Kasper All Right Reserved</p>
        </div>
      </div>
    </OuterContainer>
  );
};

export default Footer;
