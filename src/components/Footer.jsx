import { StyledFooter } from "../styles/styledFooter";
import liga from "../assets/images/liga.png";
import cowboy from "../assets/images/cowboy.png";
import logo_cesinha from "../assets/images/cesinha_logo.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a
          href="https://www.facebook.com/CesinhaBrasilOficial"
          target="_blank"
          title="Página oficial do Cesinha no Facebook"
        >
          <img src={logo_cesinha} alt="" />
        </a>

        <a
          href="https://www.youtube.com/watch?v=DSC0PyUzoxY&t=5587s"
          target="_blank"
          title="Jogo da Final no Youtube"
        >
          <img src={cowboy} alt="" className="logo__cowboy" />
        </a>
      </div>

      <div>
        <a
          href="https://www.facebook.com/profile.php?id=61555954481148"
          target="_blank"
          title="Pagina da Liga Hortolandense no Facebook"
        >
          <img src={liga} alt="" />
        </a>
      </div>
    </StyledFooter>
  );
};
