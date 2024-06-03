import { styled } from "styled-components";
import campo from "../assets/images/campo_de_futebol.png";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${campo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-top: 55px;
  margin-bottom: 90px;

  h1 {
    margin: 5px;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    font-size: 20px;
    align-self: center;
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;

    .input__nome {
      padding: 10px;
      width: 40%; /* Tamanho específico para o input de nome */
      height: 40px;
    }

    .input__numero {
      padding: 10px;
      width: 15%; /* Tamanho específico para o input de número */
      height: 40px;
    }

    select {
      width: 25%; /* Tamanho específico para o input de número */
      height: 40px;
    }

    button {
      color: #fff;
      font-size: 30px;

      &:hover {
        color: yellowgreen;
      }
    }
  }

  p {
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    margin-right: 10px;
    font-weight: bold;
    .number__list {
      font-weight: 800;
      //color: #800080;
    }

    li {
      color: white;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;

      .role__list {
        color: #2ebdbd;
      }
      .list__number {
        color: #1e90ff;
      }
      .button__edit {
        align-items: center;
        justify-content: center;
        border: 1px solid #ffa500;
        border-radius: 4px;
        width: 40px;
        height: 30px;
        margin-left: 5px;
        font-size: 20px;
        color: #fff;
        background: #ffa500;

        &:hover {
          border: 1px solid #fff;
        }
      }

      .button__remove {
        align-items: center;
        justify-content: center;
        border: 2px solid #ab1f3e;
        border-radius: 4px;
        width: 40px;
        height: 30px;
        margin-left: 5px;
        font-size: 20px;
        color: #fff;
        background: #ab1f3e;

        &:hover {
          border: 1px solid #fff;
        }
      }

      .button__save__edit {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ffa500;
        border-radius: 4px;
        width: 40px;
        height: 30px;
        margin-left: 5px;
        font-size: 20px;
        color: #fff;
        background: #ffa500;

        &:hover {
          border: 1px solid #fff;
        }
      }
      span {
        color: #fff;
        text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
          -1px -1px 0 #000;
      }
    }
  }
`;
