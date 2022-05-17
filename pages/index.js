import style from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { PromptForm } from "../src/components/PromptForm/PromptForm";
import PromptList from "../src/features/prompts/PromptList";
import { HeroSection } from "../src/components/HeroSection/HeroSection";
import { SwiperList } from "../src/components/SwiperList/SwiperList";
import { WelcomeOptions } from "../src/components/WelcomeOptions/WelcomeOptions";
import TravelBuddy from "../src/components/TravelBuddy/TravelBuddy";
import axios from "axios";


export default function Home() {
  
  
  const [travel, setTravel] = useState(false);
  const [defaul, setDefaul] = useState(true);
  const [option, setOption] = useState("Davinci");


  const dispatch = useDispatch();

  const userOption = (opt) => {
    setOption(opt);
  };

  const renderTravel = () => {
    setTravel(true)
    setDefaul(false);
  }

  const renderDefault = () => {  
    setDefaul(true)
    setTravel(false)
  }

  const display = () => {
    
    if (travel) {
      return (
        <TravelBuddy />
      )
    }
    else {
      null
    }

    if (defaul) {
      return (
        <div>
          <SwiperList handler={userOption} />
          <div className={style.home__form}>
            <PromptForm handler={onSubmit} />
          </div>
          <div className={style.home__response}>
            <PromptList />
          </div>
        </div>
      );
    }

  }

  const onSubmit = async (values) => {
    const resp = await axios
      .post(`/api/${option}`, {
        prompt: values.prompt,
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    const ans = await resp.data.result;

    const obj = {
      prompt: values.prompt,
      response: ans,
    };
    dispatch({ type: "prompts/add", payload: obj }); 
  };



  return (
    <div className={style.home}>
      <HeroSection />
      <Paper elevation={2} variant="elevation" className={style.home__content}>
        <WelcomeOptions 
          travelHandle = {renderTravel} 
          defaultHandle = {renderDefault}
          />
        {display()}
      </Paper>
    </div>
  );
}
