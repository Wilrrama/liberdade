import logo from "../assets/images/liberdade_logo.png";
import Switch from "react-switch";
import { StyledHeader } from "../styles/styledHeader";
import light from "../styles/themes/light";
import { useTheme } from "styled-components";

export const Header = ({ children, toggleTheme }) => {
  const theme = useTheme(light);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="Logotipo da equipe campeã" />
        <div>
          <h1>CAMPEÃO</h1>
          <h1>LIBERDADE</h1>
          {children}
        </div>
        <section>
          <p>{getCurrentDate()}</p>
          <p>{getCurrentTime()}</p>
          <Switch
            onChange={toggleTheme}
            checked={theme === light}
            height={15}
            checkedIcon={false}
            offColor={theme.colors.secondary}
            onColor={theme.colors.secondary}
            handDiameter={15}
          />
          <p>by bigode</p>
          <p>Liga Hortolandense</p>
        </section>
      </StyledHeader>
    </>
  );
};
