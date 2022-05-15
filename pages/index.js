import { Paper} from '@material-ui/core';
import style from '../styles/Home.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {DetailsCard} from '../src/components/DetailsCard/DetailsCard';
import data from '../src/text';
import { useState } from 'react';
import {PromptForm} from '../src/components/PromptForm/PromptForm';
import axios from 'axios';

export default function Home() {
  
  const [form, setForm] = useState(true)
  const [response, setResponse] = useState(false);
  const [option,setOption] = useState('Davinci')

  const userOption = (opt) => {
    setOption(opt)
  }

  const [result, setResult] = useState('');

  const onSubmit = async () => {
    const response = await axios.get(`/api/${option}`);
    const data = await response.data;
    console.log(data)
  }


//  async function onSubmit(values) {
//    const response = await fetch("/api/generate", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify({ prompt: values.prompt }),
//    });
//    const data = await response.json();
//    setResult(data.result);
//  }

  return (
    <div className={style.home}>
      <div className={style.home__header}>
        <h1 className={style.home__header_title}> Fun with GPT-3 </h1>
        <p className={style.home__header_subhead}>
          Shopify Developer Intern Challenge
        </p>
      </div>
      <Paper elevation={2} variant="elevation" className={style.home__content}>
        <div className={style.home__content_head}>
          <h2 className={style.home__content_title}>Select an AI engine</h2>
          <div className={style.home__content_engines}>
            <Swiper className={style.home__swiper}>
              {data.options.map((opt, i) => {
                return (
                  <SwiperSlide key={i}>
                    <DetailsCard
                      title={opt.title}
                      description={opt.description}
                      good = {opt.good}
                      handler={userOption}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <h2 className={style.home__engine}>Current Engine: {option}</h2>
        </div>
        <div className={style.home__options}>
          <h1 onClick={() => {
              setForm(true);
              setResponse(false);
            }}
            className={style.home__options_text}
          >
            Prompt
          </h1>
          <h1 onClick={() => {
              setForm(false);
              setResponse(true);
            }}
            className={style.home__options_text}
          >
            Responses
          </h1>
        </div>
        <div className={style.home__form}>
          {form ? <PromptForm handler={onSubmit} /> : null}
          {response ? <p> {result} </p> : null}
        </div>
      </Paper>
    </div>
  );
}
