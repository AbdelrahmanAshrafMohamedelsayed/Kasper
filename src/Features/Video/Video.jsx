import { OuterContainer } from "./Video.styled";

const Video = () => {
  return (
    <OuterContainer>
      <video autoPlay loop muted>
        <source src={require("./../../Assets/video.mp4")} type="video/mp4" />
      </video>
      <div className="text">
        <h2>WATCH VIDEO</h2>
        <p>Its All You Need</p>
        <button>WATCH NOW</button>
      </div>
    </OuterContainer>
  );
};

export default Video;
