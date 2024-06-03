import {
  StyledAchievements,
  BackgroundContainer,
} from "../styles/styledAchievements";

import trofeu from "../assets/images/trofeu.png";
import logo2 from "../assets/images/copa_amizade_logo.jpeg";

export const Achievements = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledAchievements>
        <header>
          <h1>Galeria de Troféus</h1>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Campeonato</th>
                <th>Troféu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>2024</p>
                </td>
                <td>
                  <figure>
                    <a href="https://copafacil.com/-k0vu5" target="_blank">
                      <img
                        src={logo2}
                        alt="Logo Copa Euro"
                        className="logo__campeonato"
                        title="Página oficial da Copa Amizade 2024"
                      />
                    </a>
                    <figcaption>
                      <p>Copa Amizade 2024</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <img
                    src={trofeu}
                    alt="Foto Troféu"
                    className="logo__trofeu"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </StyledAchievements>
    </>
  );
};
