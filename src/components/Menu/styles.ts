import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import styled from "styled-components";
import variables from "../../styles/variables";

export const MenuStyle = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 4em;
    padding: 20px;
    flex-direction: column;
    font-size: 0.8em;
    padding-top: 0px;
    img {
      display: none;
    }
  }
  span {
    color: ${variables.cinza};
    font-size: 1em;
    font-weight: bold;
    padding-bottom: 10px;
  }

  h1 {
    padding-top: 15px;
  }

  p {
    padding-top: 15px;
    max-width: 600px;
    color: ${variables.cinza};
  }
`;

export const BotaoLinkedin = styled(BiLogoLinkedin)`
  font-size: 1.5em;
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 1.5em;
`;

export const MenuInfos = styled.div`
  padding-right: 10em;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const Buttons = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 5px;

    margin-right: 10px;
    background-color: ${variables.corSecundaria};
  }
  a {
    padding: 10px;
    color: #fff;
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
`;
