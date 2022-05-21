import style from './GeneratePlaylist.module.scss';
import { Paper } from "@material-ui/core";

export const GeneratePlaylist = ({data}) => {
  return (
    <Paper elevation={2} className={style.playlist}>
      <h2 className={style.playlist__title}> Daily Playlist </h2>
      {data[0].split("\n").map((ele, i) => {
        return (
          <p key={i} className={style.playlist__text}>
            {ele.slice(2)}
          </p>
        );
      })}
      {data[1].split("\n").map((ele, i) => {
        return (
          <p key={i} className={style.playlist__text}>
            {" "}
            {ele.slice(1)}{" "}
          </p>
        );
      })}
      {data[2].split("\n").map((ele, i) => {
        return (
          <p key={i} className={style.playlist__text}>
            {" "}
            {ele.slice(2)}{" "} 
          </p>
        );
      })}
      {data[3].split("\n").map((ele, i) => {
        return (
          <div key={i} className={style.playlist__link}>
            <a className={style.playlist__link_text} href = {ele.slice(0)}>
              Click me for your song of the day
              <span aria-label="hand up emoji">🙋‍♂️</span>
            </a>
          </div>
        );
      })}
    </Paper>
  );
}