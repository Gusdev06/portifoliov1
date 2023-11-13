import {
  BotaoLinkedin,
  Buttons,
  GithubIcon,
  MenuInfos,
  MenuStyle,
} from "./styles";

export const Menu = () => {
  return (
    <MenuStyle>
      <MenuInfos>
        <span>OLA, O MEU NOME É GUSTAVO GOMES👋</span>
        <h1>Desenvolvedor FullStack</h1>
        <p>
          Desenvolvedor com proficiência em Node.js, TypeScript e React,
          incorporando igualmente a integração do backend. Possuo habilidades na
          criação de estruturas e estilos atrativos, com especialização em
          facilitar interações dinâmicas e desenvolver aplicações escaláveis.
          Comprometido em assegurar a entrega de produtos de alta qualidade,
          mantenho-me constantemente atualizado para continuar a me destacar no
          mercado.
        </p>
        <Buttons>
          <div>
            <GithubIcon />
            <a target="blank" href="https://github.com/Gusdev06">
              Github
            </a>
          </div>
          <div>
            <BotaoLinkedin />
            <a target="blank" href="https://www.linkedin.com/in/gusdev06/">
              Linkedin
            </a>
          </div>
        </Buttons>
      </MenuInfos>
      <img
        src="https://portfolio-v2-bay-psi.vercel.app/assets/img/dev.png"
        alt=""
      />
    </MenuStyle>
  );
};
