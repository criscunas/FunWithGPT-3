import { useSelector, shallowEqual, useDispatch } from "react-redux";
import style from './PromptList.module.scss';
import {Grid ,Card } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import { Loading } from "../../components/Loading";

const selectedPrompts = (state) => state.prompts.map((prompt) => prompt.data)

const PromptList = () => {

  const dispatch = useDispatch()

  const deleteResponse = (id) => {
    dispatch({ type: "prompts/delete", payload: id });
  }

  const deleteAll = () => {
    dispatch({type:'prompts/allDelete'})
  }

  const prompts = useSelector(selectedPrompts, shallowEqual);

  const renderedListItems = prompts.map((prompt, i ) => {
    return (
      <Grid item xs={12} sm={6} key = {i}>
        <Card variant = "outlined" className={style.response}>
          <div className={style.response__answer}>
            <p
            className = {style.response__answer_text}> Prompt <span> 
            <ClearIcon 
            onClick = {() => deleteResponse(i)}
            color = "error"
            style = {{cursor:"pointer"}}
            /> 
            </span>  
            </p>
            <p> {prompt.prompt} </p>
          </div>
          <div className={style.response__answer}>
            <p style={{ fontWeight: "bold" }}> Response </p>
            <p> {prompt.response} </p>
          </div>
        </Card>
      </Grid>
    );
    
  });

  return (
    <div className = {style.response__container}>
      {renderedListItems.length === 0 ? null :
      <div>
        <h1 className={style.response__title}>Responses 
          <span>  <DeleteSweepRoundedIcon onClick = {() => deleteAll() } color = "error" style = {{cursor:"pointer"}} /> </span> 
        </h1>
        <Grid container spacing={1}>
          {renderedListItems}
        </Grid>
      </div> 
      }
    </div>
  );
};

export default PromptList;
