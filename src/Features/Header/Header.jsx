// import { MMContainer } from "../../Pages/HomePage.styled";
import { Logo, MHeader, NAV, MMContainer } from "./Header.styled";
import logo from "../../Assets/logo.png";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const [btn, setbtn] = useState(false);
  const [ActiveLink, setActiveLink] = useState("l1");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //   console.log(windowWidth);
  return (
    <MHeader>
      <MMContainer>
        <Logo href="/">
          <img src={logo} alt="logo" />
        </Logo>
        <NAV>
          <span
            className="bars"
            onClick={() => {
              setbtn(!btn);
            }}
          >
            <FaBars />
          </span>
          {(btn || windowWidth > 768) && (
            <ul>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    setActiveLink("l1");
                  }}
                  className={ActiveLink === "l1" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#Services"
                  onClick={() => {
                    setActiveLink("l2");
                  }}
                  className={ActiveLink === "l2" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#Portfolio"
                  onClick={() => {
                    setActiveLink("l3");
                  }}
                  className={ActiveLink === "l3" ? "active" : ""}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="#About"
                  onClick={() => {
                    setActiveLink("l4");
                  }}
                  className={ActiveLink === "l4" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#Pricing"
                  onClick={() => {
                    setActiveLink("l5");
                  }}
                  className={ActiveLink === "l5" ? "active" : ""}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#Contact"
                  onClick={() => {
                    setActiveLink("l6");
                  }}
                  className={ActiveLink === "l6" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
          <div className="Form">
            <span className="search">
              {/* <FaBars /> */}
              <BsFillSearchHeartFill />
            </span>
          </div>
        </NAV>
      </MMContainer>
    </MHeader>
  );
};

export default Header;
