import { GiSoccerBall } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { Button } from "../fragments/Button";
import { StyledNav } from "../styles/styledNav";

export const Nav = ({ setActiveSection }) => {
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <StyledNav>
        <Button onClick={() => handleButtonClick("champion")}>
          <GiSoccerBall />
        </Button>
        <Button onClick={() => handleButtonClick("achievements")}>
          <FaTrophy />
        </Button>
        <Button onClick={() => handleButtonClick("people")}>
          <BsPeopleFill />
        </Button>
        <Button onClick={() => handleButtonClick("chores")}>
          <BsCardChecklist />
        </Button>
      </StyledNav>
    </>
  );
};
