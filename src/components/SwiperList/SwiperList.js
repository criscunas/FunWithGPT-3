import style from './SwiperList.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailsCard } from "../DetailsCard/DetailsCard";
import data from "../../text";
import "swiper/css/pagination";
import "swiper/css";

export const SwiperList = ({handler}) => {
  return (
    <div className = {style.swiper__container}>
    <h1 className={style.swiper__header}>Select an AI engine </h1>
    <Swiper className={style.swiper}>
      {data.options.map((opt, i) => {
        return (
          <SwiperSlide key={i}>
            <DetailsCard
              title={opt.title}
              description={opt.description}
              good={opt.good}
              handler={handler}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
}
