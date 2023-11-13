import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import variables from "../../styles/variables";

interface ItemMenuProps {
  isActive: boolean;
}

interface ListaMenuProps {
  active: boolean;
}

export const IconeMenu = styled(AiOutlineMenu)``;

export const MenuInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const CabecalhoStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.8em;
  }

  span {
    color: ${variables.corSecundaria};
  }
`;

export const BotaoMenu = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2em;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const ListaMenu = styled.ul<ListaMenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    margin-top: 20px;
    display: ${(props) => (props.active ? "grid" : "none")};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;

    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ItemMenu = styled.li<ItemMenuProps>`
  margin-left: 20px;
  button {
    color: ${(props) => (props.isActive ? variables.corSecundaria : "#fff")};
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    text-decoration: none;
    display: block;
  }
  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1px;
    width: 100%;
    button {
      padding: 4px;
      width: 100%;
    }
  }
`;
