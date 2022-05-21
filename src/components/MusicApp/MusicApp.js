import style from './MusicApp.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { MusicForm } from '../MusicForm/MusicForm';
import { GeneratePlaylist } from '../GeneratePlaylist/GeneratePlaylist';
import { Loading } from '../Loading';


export default function MusicApp () {


  const [playlist,setPlaylist] = useState([])
  const [generating, setGenerating] = useState(false)


  const onSubmit = (values) => {
    
    setGenerating(true)

    axios
      .post(`/api/Music`, {
        feeling: values.checked[0],
        activity: values.checked[1],
        instrument: values.checked[2],
      })
      .then((res) => {
        setPlaylist(res.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const renderResults = () => {
    return (
      <div>
        {playlist.length === 0 ? (
          <Loading />
        ) : (
          <GeneratePlaylist data = {playlist} />
        )}
      </div>
    );
  };



  return (
    <div className={style.music}>
      <h1 className={style.music__title}> Playlist generation with AI </h1>

      <p className={style.music__subtitle}>
        Generate a playlist with emojis & the help of Open AI's Davinci engine.
      </p>
      <p className={style.music__note}>
        * For best results, only select one option per row.
      </p>

      <div className={style.music__form}>
        <MusicForm handler={onSubmit} />
      </div>
      <div className={style.music__results}>
        {!generating ? null : renderResults()}
      </div>
    </div>
  );
} 