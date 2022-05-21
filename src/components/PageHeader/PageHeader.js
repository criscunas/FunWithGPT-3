import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavText = styled.p`
  color: #004c3f;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
`;

export const PageHeader = () => {
  const Router = useRouter();

  return (
    <Nav>
      <NavIcons>
        <GitHubIcon
          htmlColor="black"
          onClick={() => {
            Router.push("https://github.com/criscunas/FunWithGPT-3");
          }}
        />
        <LinkedInIcon
          htmlColor="#0072b1"
          onClick={() => {
            Router.push("https://www.linkedin.com/in/cristophercunas/");
          }}
        />
        <EmojiPeopleIcon
          htmlColor="#004C3F"
          onClick={() => {
            Router.push("https://criscunas.dev");
          }}
        />
      </NavIcons>
      <NavText>Powered by OpenAI</NavText>
    </Nav>
  );
};
