import { styled } from "styled-components";
import fundo from "../assets/images/fundo_liberdade.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(40%) contrast(70%) saturate(200%);
`;

export const StyledAchievements = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 95px;
  margin-bottom: 90px;
  padding: 15px;

  header {
    color: aliceblue;
  }

  p {
    color: aliceblue;
  }

  table {
    width: 80%;
    border-collapse: collapse;
    border: 2px solid whitesmoke;

    th,
    td {
      padding: 10px;
      border: 1px solid whitesmoke;
    }

    thead {
      background-color: #333;
      color: white;
    }

    tbody {
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      align-items: center;
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo__campeonato {
      width: 100px;
      height: 100px;
    }

    .logo__trofeu {
      width: 120px;
      height: 200px;
    }
  }
`;
