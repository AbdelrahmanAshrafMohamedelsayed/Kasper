import { Link } from "react-router-dom";
import {
  Box,
  Boxes,
  Heading,
  Last,
  LastCont,
  LastinCont,
  MMContainer,
  MMhead,
  NMhead,
  OuterContainer,
} from "./Pricing.styled";
import { BsEnvelope, BsEnvelopeAtFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <OuterContainer>
      <MMContainer>
        <Heading>
          <h2>PRICING</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </Heading>
        <Boxes>
          <Box>
            <MMhead>
              <p className="title">Basic</p>
              <span>199</span>
            </MMhead>
            <NMhead>
              <p>5GB Storage</p>
              <p>10GB Bandwidth</p>
              <p>No Domain</p>
              <p>Feature</p>
            </NMhead>
            <Link to="#">Buy Now</Link>
          </Box>
          <Box>
            <MMhead>
              <p className="title">PRO</p>
              <span>1201</span>
            </MMhead>
            <NMhead>
              <p>5GB Storage</p>
              <p>10GB Bandwidth</p>
              <p>No Domain</p>
              <p>Feature</p>
            </NMhead>
            <Link to="#">Buy Now</Link>
          </Box>
          <Box>
            <MMhead>
              <p className="title">Basic</p>
              <span>19</span>
            </MMhead>
            <NMhead>
              <p>5GB Storage</p>
              <p>10GB Bandwidth</p>
              <p>No Domain</p>
              <p>Feature</p>
            </NMhead>
            <Link to="#">Buy Now</Link>
          </Box>
          <Box>
            <MMhead>
              <p className="title">PLATINUM</p>
              <span>45</span>
            </MMhead>
            <NMhead>
              <p>5GB Storage</p>
              <p>10GB Bandwidth</p>
              <p>No Domain</p>
              <p>Feature</p>
            </NMhead>
            <Link to="#">Buy Now</Link>
          </Box>
        </Boxes>
        <Last>
          <p>Contact us if you have special request</p>
          <button>Contact Us</button>
        </Last>
      </MMContainer>
      <LastCont>
        <MMContainer>
          <LastinCont>
            <form action="">
              <span>
                <BsEnvelope />
              </span>
              <input type="email" name="mail" placeholder="Your Email" />
              <input type="submit" value="Subscribe" />
            </form>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blan dit aliquet elit, eget tincidunt.
            </p>
          </LastinCont>
        </MMContainer>
      </LastCont>
    </OuterContainer>
  );
};

export default Pricing;
