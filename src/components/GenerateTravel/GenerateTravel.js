import style from './GenerateTravel.module.scss';

export const GenerateTravel = ({data}) => {
  return (

    <div className={style.data}>
      <div className={style.data__restaurants}>
        <h1 className={style.data__title}> Must Try Eats </h1>
        {data[0].split("\n").map((ele) => {
          return <p className={style.data__text}> {ele} </p>;
        })}
      </div>

      <div className={style.data__activities}>
        <h1 className={style.data__title}> Fun things to do </h1>
        {data[1].split("\n").map((ele) => {
          return <p className={style.data__text}> {ele} </p>;
        })}
      </div>

      <div className={style.data__hotels}>
        <h1 className={style.data__title}> Places to stay </h1>
        {data[2].split("\n").map((ele) => {
          return <p className={style.data__text}> {ele} </p>;
        })}
      </div>
    </div>

  );
}