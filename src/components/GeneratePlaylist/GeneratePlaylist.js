import style from './GeneratePlaylist.module.scss';
import { Paper } from "@material-ui/core";

export const GeneratePlaylist = ({data}) => {
  return (
    <Paper elevation={2} className={style.playlist}>
      <h2 className={style.playlist__title}> Daily Playlist </h2>
      <p className={style.playlist__text}>{data[0]}</p>
      <div className={style.playlist__link}>
        <a href={data[1]} className={style.playlist__link_text}>
          Click me for your song of the day
          <span aria-label="hand up emoji">🙋‍♂️</span>
        </a>
      </div>
    </Paper>
  );
}