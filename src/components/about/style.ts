import styled from "styled-components";
import variables from "../../styles/variables";

export const AboutStyle = styled.div`
  min-height: 100vh;
  padding-top: 10vh; // Reduced padding to accommodate smaller screens
  margin: 0 auto;
  display: flex;

  flex-direction: row; // Default to row, but will change on smaller screens

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack vertically on small screens
    align-items: center; // Center align the items
    padding-top: 5vh; // Further reduce padding for very small screens
  }
`;

export const AboutImg = styled.div`
  flex: 0 0 350px;
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex: none; // Allow the image to scale with the container
    img {
      border-radius: 5%;
    }
    max-width: 300px; // Limit the size of the image on small screens
  }
`;

export const AboutText = styled.div`
  flex: 1;
  max-width: 700px;
  width: 100%;
  padding-left: 20px; // Add some space between the image and text

  h1 {
    margin-bottom: 20px;
  }

  p {
    color: ${variables.cinza};
  }

  @media (max-width: 768px) {
    padding: 30px;
    padding-top: 20px; // Add some space between the image and text
    font-size: 0.9em;
  }
`;
