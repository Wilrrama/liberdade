import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 5px;
  width: 100%;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  z-index: 0;
  //background-color: #6170e3;
  background-color: ${(props) => props.theme.colors.primary};

  span {
    color: whitesmoke;
  }

  .logo__rony {
    width: 70px;
    height: 50px;
  }

  .logo__cowboy {
    width: 60px;
    height: 50px;
  }
  img {
    width: 60px;
    height: 60px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
