import { Design1, Image } from "./Design.styled";
import {
  AiOutlineDesktop,
  AiOutlineDollarCircle,
  AiOutlineDislike,
} from "react-icons/ai";
const Design = () => {
  const imgUrl = require(".././../Assets/design-features.jpg"); //
  return (
    <Design1 imgUrl={imgUrl}>
      <Image>
        <img src={require("./../../Assets/mobile.png")} alt="" />
      </Image>
      <div className="text">
        <h2>OUR DESIGN COMES WITH...</h2>
        <ul>
          <li>
            <span>
              <AiOutlineDesktop />
            </span>
            <p>Modern And Clean Design</p>
          </li>
          <li>
            <span>
              <AiOutlineDesktop />
            </span>
            <p>Modern And Clean Design</p>
          </li>
          <li>
            <span>
              <AiOutlineDesktop />
            </span>
            <p>Modern And Clean Design</p>
          </li>
          <li>
            <span>
              <AiOutlineDesktop />
            </span>
            <p>Modern And Clean Design</p>
          </li>
        </ul>
      </div>
    </Design1>
  );
};

export default Design;
