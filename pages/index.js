import { Paper, Box, Card } from '@material-ui/core';
import style from '../styles/Home.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {DetailsCard} from '../src/components/DetailsCard/DetailsCard';
import data from '../src/text';

export default function Home() {
  
  return (
    <div className={style.home}>
      <div className={style.home__header}>
        <h1 className={style.home__header_title}> Fun with GPT-3 </h1>
        <p className={style.home__header_subhead}>
          Shopify Developer Intern Challenge
        </p>
      </div>
      <Paper elevation={2} variant="elevated" className={style.home__content}>
        <div className={style.home__content_head}>
          <h2 className={style.home__content_title}>Select an AI engine</h2>
          <div className={style.home__content_options}>
            <Swiper
              className={style.home__swiper}
            >
              {data.options.map((opt, i) => {
                return (
                  <SwiperSlide key={i}>
                    <DetailsCard
                      title={opt.title}
                      description={opt.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Paper>
    </div>
  );
}
