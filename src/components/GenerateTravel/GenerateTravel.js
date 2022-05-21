import {Paper} from '@material-ui/core';
import style from './GenerateTravel.module.scss';

export const GenerateTravel = ({data, destination}) => {
  
  const {city, state} = destination
  
  return (
    <Paper elevation={2}>
      <div className={style.data}>
        <div className={style.data__destination}>
          <h2 className={style.data__destination_text}>
            Travel tips for {city}, {state}
          </h2>
        </div>
        <div className={style.data__restaurants}>
          <h1 className={style.data__title}> Must Try Eats </h1>
          {data[0].split("\n").map((ele, i) => {
            return (
              <p key={i} className={style.data__text}>
                {" "}
                {ele}{" "}
              </p>
            );
          })}
        </div>

        <div className={style.data__activities}>
          <h1 className={style.data__title}> Fun things to do </h1>
          {data[1].split("\n").map((ele, i) => {
            return (
              <p key={i} className={style.data__text}>
                {" "}
                {ele}{" "}
              </p>
            );
          })}
        </div>

        <div className={style.data__hotels}>
          <h1 className={style.data__title}> Places to stay </h1>
          {data[2].split("\n").map((ele, i) => {
            return (
              <p key={i} className={style.data__text}>
                {" "}
                {ele}{" "}
              </p>
            );
          })}
        </div>
      </div>
    </Paper>
  );
}