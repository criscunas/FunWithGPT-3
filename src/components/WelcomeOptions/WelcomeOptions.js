import style from './WelcomeOptions.module.scss';
import { Grid, Icon } from "@material-ui/core";
import Image from 'next/image';

export const WelcomeOptions = ({defaultHandle, travelHandle, musicHandle}) => {
  
  
  return (
    <div className={style.welcome}>
      <div className={style.welcome__content}>
        <h1 className={style.welcome__title}>Getting Started</h1>
        <p className={style.welcome__msg}>
          Simply select the engine of your choosing and ask away ! Or try out
          one of our fun mini apps.
        </p>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div className={style.welcome__item}>
              <p className={style.welcome__item_text}> Engine Select </p>
              <Icon onClick={() => defaultHandle()}>
                <Image
                  src="/images/robot.svg"
                  layout='responsive'
                  width={50}
                  height={40}
                  alt="robot emoji"
                />
              </Icon>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={style.welcome__item}>
              <p className={style.welcome__item_text}> Playlist Gen</p>
              <Icon onClick={() => musicHandle()}>
                <Image
                  src="/images/headphone.svg"
                  layout="responsive"
                  width={50}
                  height={35}
                  alt="headphone emoji"
                />
              </Icon>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={style.welcome__item}>
              <p className={style.welcome__item_text}> Travel Buddy</p>
              <Icon onClick={() => travelHandle()}>
                <Image
                  src="/images/airplane.svg"
                  layout="responsive"
                  width={50}
                  height={40}
                  alt="plane emoji"
                />
              </Icon>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}