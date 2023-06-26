import { Content, Landing1, Text } from "./Landing.styled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Landing = () => {
  const imgUrl = require("../../../Assets/landing.jpg"); //
  return (
    <Landing1 imgUrl={imgUrl}>
      <Text>
        <Content>
          <h2>
            Hello World!
            <br />
            We Are Kasper We Make Art.
          </h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </Content>
      </Text>
      <span className="left">
        <AiOutlineArrowLeft />
      </span>
      <span className="right">
        <AiOutlineArrowRight />
      </span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Landing1>
  );
};

export default Landing;
