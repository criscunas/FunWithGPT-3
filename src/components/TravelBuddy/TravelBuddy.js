import style from './TravelBuddy.module.scss';
import { useState } from 'react';
import { TravelForm } from '../TravelForm/TravelForm';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import {GenerateTravel} from '../GenerateTravel/GenerateTravel';

export default function TravelBuddy () {

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false)
  const [msg, setMsg] = useState(true)

  

  const onSubmit = (values) => {
    axios
      .post(`/api/Travel`, {
        city: values.city,
        state: values.state
      })
      .then((res) => {
        console.log(res);
        setData(res.data.result)
        setDisplay(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className={style.travel}>
      <h1 className={style.travel__title}> Travel Buddy </h1>
      <p className={style.travel__subtitle}>
        Enter a destination & we'll help you out on your next trip.
      </p>
      <div className={style.travel__form}>
        <TravelForm handler={onSubmit} />
      </div>
      <div className={style.travel__results}>

      {msg ? 
        <h2 className={style.travel__results_title}>
          Awaiting your destination <span aria-label="airplane">✈️</span>
        </h2> : null
        }

        {!display ? null : <GenerateTravel data={data} />}
      </div>
    </div>
  );
} 