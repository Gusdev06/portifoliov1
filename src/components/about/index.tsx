import { AboutImg, AboutStyle, AboutText } from "./style";

export const About = () => {
  return (
    <AboutStyle id="sobre">
      <AboutImg>
        <img src="https://i.imgur.com/hO646bh.jpg" alt="" />
      </AboutImg>
      <AboutText>
        <h1>SOBRE</h1>
        <p>
          Durante grande parte da minha adolescência, atuei como jogador
          profissional de basquete, desenvolvendo habilidades fundamentais para
          o esporte, tais como trabalho em equipe, resiliência e disciplina. No
          entanto, a área da tecnologia sempre foi uma paixão presente em minha
          vida e, em determinado momento, decidi seguir por esse caminho.
          Comecei a me aprofundar em programação e iniciei minha jornada no
          curso de Desenvolvedor Fullstack Python pela EBAC, e desde então tenho
          me sentido extremamente motivado. Tendo em vista o grande sucesso
          dessa transição, meu objetivo é me especializar em fullstack.
        </p>
      </AboutText>
    </AboutStyle>
  );
};
