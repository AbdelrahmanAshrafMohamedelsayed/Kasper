import { Heading, MMContainer } from "./About.styled";

const About = () => {
  return (
    <MMContainer>
      <Heading>
        <h2>ABOUT</h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </Heading>
      <div>
        <img src={require("./../../Assets/about.png")} alt="" />
      </div>
    </MMContainer>
  );
};

export default About;
