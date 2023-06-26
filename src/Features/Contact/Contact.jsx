import {
  MMContainer,
  OuterContainer,
  Heading,
  Content,
  Box,
} from "./Contact.styled";

const Contact = () => {
  return (
    <OuterContainer>
      <Heading>
        <h2>CONTACT</h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </Heading>
      <MMContainer>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          {/* add text area */}
          <textarea
            id="myTextarea"
            rows="1"
            placeholder="Your message"
          ></textarea>
          <div className="a">
            <input type="submit" value="Send Message" />
          </div>
        </form>
        <Content>
          <Box>
            <h4>GET IN TOUCH</h4>
            <p className="phone">+00 123.456.789</p>
            <p className="phone">+00 123.456.789</p>
          </Box>
          <Box>
            <h4 className="a2">Where We Are</h4>
            <p className="phone">Awesome Address 17</p>
            <p className="phone">New York, NYC</p>
            <p className="phone">123-4567-890</p>
            <p className="phone">New York, NYC</p>
          </Box>
        </Content>
      </MMContainer>
    </OuterContainer>
  );
};

export default Contact;
