import { Link } from "react-router-dom";
import {
  Heading,
  OuterContainer,
  Box,
  Image,
  Text,
  Boxs,
} from "./PORTFOLIO.styled";

const PORTFOLIO = () => {
  return (
    <OuterContainer>
      <Heading>
        <h2>PORTFOLIO</h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </Heading>
      <ul>
        <li>All</li>
        <li>App</li>
        <li>Photo</li>
        <li>Web</li>
        <li>Print</li>
      </ul>
      <Boxs>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text>
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
        <Box>
          <Image>
            <img src={require("./../../Assets/shuffle-01.jpg")} alt="" />
          </Image>
          <Text className="txt">
            <h3>Project Title</h3>
            <p>Photography</p>
          </Text>
        </Box>
      </Boxs>
      <Link to="#">LOAD MORE</Link>
    </OuterContainer>
  );
};

export default PORTFOLIO;
