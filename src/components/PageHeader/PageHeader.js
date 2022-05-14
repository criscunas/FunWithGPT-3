import style from './PageHeader.module.scss';
import { AppBar, Box , Toolbar} from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from 'next/router';


export const PageHeader = () => {
  
  const Router = useRouter();

  return (
    <Box className={style.header}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar className={style.header__nav}>
          <div className={style.header__nav_icons}>
            <GitHubIcon htmlColor="black" onClick = {() => {
              Router.push("https://github.com/criscunas/FunWithGPT-3");
            }} />
            <LinkedInIcon htmlColor="#0072b1" onClick = {() => {
              Router.push("https://www.linkedin.com/in/cristophercunas/");
            }}/>
          </div>

          <h2 className={style.header__nav_text}>Powered by OpenAI</h2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}