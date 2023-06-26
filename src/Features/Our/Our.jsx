import {
  Container,
  Heading,
  MMContainer,
  Skills,
  TESTIMONIALS,
  TestCont,
  TestElement,
  ProgS,
  Prog,
} from "./Our.styled";
const Our = () => {
  return (
    <Container>
      <MMContainer>
        <TESTIMONIALS>
          <Heading>
            <h2>TESTIMONIALS</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </Heading>
          <TestCont>
            <TestElement>
              <img src={require("./../../Assets/skills-01.jpg")} alt="" />
              <div className="txt">
                <p className="a1">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt.
                </p>
                <p className="a2">John Doe, CEO</p>
              </div>
            </TestElement>
            <TestElement>
              <img src={require("./../../Assets/skills-02.jpg")} alt="" />
              <div className="txt">
                <p className="a1">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt.
                </p>
                <p className="a2">John Doe, CEO</p>
              </div>
            </TestElement>
          </TestCont>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </TESTIMONIALS>
        <Skills>
          <Heading>
            <h2>SKILLS</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </Heading>
          <ProgS>
            <Prog percentage={"90%"}>
              <h4>Photoshop</h4>
              <div className="wid">
                <span></span>
              </div>
            </Prog>
            <Prog percentage={"90%"}>
              <h4>HTML</h4>
              <div className="wid">
                <span></span>
              </div>
            </Prog>
            <Prog percentage={"90%"}>
              <h4>CSS</h4>
              <div className="wid">
                <span></span>
              </div>
            </Prog>
            <Prog percentage={"90%"}>
              <h4>JAVASCRIPT</h4>
              <div className="wid">
                <span></span>
              </div>
            </Prog>
          </ProgS>
        </Skills>
      </MMContainer>
    </Container>
  );
};

export default Our;
