import { Box, Heading, MMContainer, Serv } from "./Services.styled";
import {
  AiOutlineDesktop,
  AiOutlineDollarCircle,
  AiOutlineDislike,
} from "react-icons/ai";
const Services = () => {
  return (
    <Serv>
      <Heading>
        <h2>SERVICES</h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </Heading>
      <MMContainer>
        <Box>
          <span>
            <AiOutlineDesktop />
          </span>
          <div className="hey">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </Box>
        <Box>
          <span>
            <AiOutlineDollarCircle />
          </span>
          <div className="hey">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </Box>
        <Box>
          <span>
            <AiOutlineDislike />
          </span>
          <div className="hey">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </Box>
        <Box>
          <span>
            <AiOutlineDesktop />
          </span>
          <div className="hey">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </Box>
      </MMContainer>
    </Serv>
  );
};

export default Services;
