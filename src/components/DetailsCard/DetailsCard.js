import style from "./DetailsCard.module.scss";
import { Button } from "@material-ui/core";

export const DetailsCard = ({ title, description, good, handler }) => {
  return (
    <div className={style.card}>
      <div className={style.card__body}>
        <h2 className={style.card__header}> {title} </h2>
        <p className={style.card__description}> {description} </p>
        <p className= {style.card__good} > Good at: <span className={style.card__good_at}> {good} </span> </p>
        <div className={style.card__button}>
          <Button 
            variant="contained" 
            size="small"
            onClick={() => {
              handler(title)
            }}
            >
            <p className={style.card__button_text}>Select</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
