import { AiOutlineCoffee } from "react-icons/ai";
import { MMContainer, Stats1, Box } from "./Stats.styled";

const Stats = () => {
  return (
    <Stats1>
      <MMContainer>
        <Box>
          <span>
            <AiOutlineCoffee />
          </span>
          <div className="num">1.295</div>
          <p>PROJECTS COMPLETED</p>
        </Box>
        <Box>
          <span>
            <AiOutlineCoffee />
          </span>
          <div className="num">1.295</div>
          <p>PROJECTS COMPLETED</p>
        </Box>
        <Box>
          <span>
            <AiOutlineCoffee />
          </span>
          <div className="num">1.295</div>
          <p>PROJECTS COMPLETED</p>
        </Box>
        <Box>
          <span>
            <AiOutlineCoffee />
          </span>
          <div className="num">1.295</div>
          <p>PROJECTS COMPLETED</p>
        </Box>
      </MMContainer>
    </Stats1>
  );
};

export default Stats;
