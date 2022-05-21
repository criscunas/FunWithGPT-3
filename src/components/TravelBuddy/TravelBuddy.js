import style from './TravelBuddy.module.scss';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';
import { TravelForm } from '../TravelForm/TravelForm';
import axios from 'axios';
import {GenerateTravel} from '../GenerateTravel/GenerateTravel';
import AutoModeRoundedIcon from "@mui/icons-material/AutoModeRounded";
import { Loading } from '../Loading';
import cities from '../../cities';

export default function TravelBuddy () {

  const [data, setData] = useState([]);
  const [destination, setDestination] = useState([])
  const [display, setDisplay] = useState(false)
  const [msg, setMsg] = useState(true)

  const onSubmit = (values) => {
    setDisplay(true)

    axios
      .post(`/api/Travel`, {
        city: values.city,
        state: values.state
      })
      .then((res) => {
        setData(res.data.result)
        setDestination(res.data.destination)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const randomDestination = () => {
    let num = Math.floor(Math.random() * cities.cities.length);
    let dest = cities.cities[num];

    let obj = {
      city: dest.city,
      state: dest.state,
    };

    onSubmit(obj);
  };


  const renderResults = () => {
    return (
      <div className={style.travel__results}>
        {data.length === 0 ? (
          <Loading />
        ) : (
          <GenerateTravel data={data} destination = {destination} />
        )}
      </div>
    );
  }


  return (
    <div className={style.travel}>
      <h1 className={style.travel__title}> Travel Buddy </h1>

      <p className={style.travel__subtitle}>
        Enter a destination & we'll help you out on your next trip.
      </p>

      <p className={style.travel__note}>
        * For best results, submit entry in the form of "Miami, Florida".
      </p>
      <div className={style.travel__form}>
        <TravelForm handler={onSubmit} />

        <div className={style.travel__form_random}>
          <h2 className={style.travel__form_text}>
            {" "}
            Click here for a randomly generated destination{" "}
          </h2>
          <IconButton
            variant="contained"
            size="small"
            onClick={() => randomDestination()}
          >
            <AutoModeRoundedIcon color="success" />
          </IconButton>
        </div>
      </div>
      <div className={style.travel__results}>
        {!display ? null : renderResults()}
      </div>
    </div>
  );
} 