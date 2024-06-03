import { styled } from "styled-components";
import fundo from "../assets/images/fundo.jpeg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 55px;
  margin-top: 55px;
  margin-bottom: 0;

  .champion_info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .champion_info_team {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1,
      h2 {
        font-size: 1.2rem;
        color: whitesmoke;
        margin: 0;
      }
    }

    .logo {
      padding-top: 10px;
      width: 70%;
      height: auto;
    }
  }

  .swiper {
    width: 80%;
    // margin: 0 auto;
    z-index: 0;
  }

  .slider__item {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }

  .team_info_history {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2% 10%;
    padding-bottom: 70px;
    flex: 0;

    p {
      color: whitesmoke;
      text-align: justify;
    }
  }
`;
