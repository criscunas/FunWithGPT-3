import style from './WelcomeOptions.module.scss';
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Grid } from "@material-ui/core";
import EngineeringIcon from "@mui/icons-material/Engineering";

export const WelcomeOptions = ({defaultHandle, travelHandle}) => {
  
  
  return (
    <div className={style.welcome}>
      <h1 className={style.welcome__title}>Getting Started</h1>
      <p className={style.welcome__msg}>
        Simply select the engine of your choosing and ask away ! Or select from
        one of fun mini apps to try.
      </p>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <div className={style.welcome__item}>
            <p className={style.welcome__item_text}> Engine</p>
            <EngineeringIcon
              onClick={() => defaultHandle()}
              htmlColor="#004C3F"
              fontSize="large"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={style.welcome__item}>
            <p className={style.welcome__item_text}> Travel Buddy</p>
            <TravelExploreIcon
              onClick={() => travelHandle()}
              htmlColor="#004C3F"
              fontSize="large"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}