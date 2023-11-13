import { useState } from "react";
import {
  BotaoMenu,
  CabecalhoStyle,
  IconeMenu,
  ItemMenu,
  ListaMenu,
  MenuInfos,
} from "./styles";

// Define a type for your menu items
type MenuItem = {
  name: string;
  sectionId: string;
};

// Your menu items with corresponding section IDs
const menuItems: MenuItem[] = [
  { name: "HOME", sectionId: "home" },
  { name: "SOBRE", sectionId: "sobre" },
  { name: "HABILIDADES", sectionId: "habilidades" },
  { name: "PROJETOS", sectionId: "projetos" },
  { name: "CONTATO", sectionId: "contato" },
];

export const Cabecalho = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItemClick = (item: MenuItem) => {
    setActiveItem(item.name);
    scrollToSection(item.sectionId);
    setIsMenuOpen(false);
  };

  return (
    <CabecalhoStyle>
      <MenuInfos>
        <div>
          <h1>
            GUS / <span>DEV</span>
          </h1>
        </div>
        <div>
          <BotaoMenu onClick={toggleMenu}>
            <IconeMenu />
          </BotaoMenu>
        </div>
      </MenuInfos>
      <ListaMenu active={isMenuOpen}>
        {menuItems.map((item) => (
          <ItemMenu
            key={item.name}
            isActive={activeItem === item.name}
            onClick={() => handleItemClick(item)}
          >
            {/* We use a button here to avoid page navigation */}
            <button type="button">{item.name}</button>
          </ItemMenu>
        ))}
      </ListaMenu>
    </CabecalhoStyle>
  );
};
