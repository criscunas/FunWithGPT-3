import style from './PromptForm.module.scss';
import { useFormik} from "formik";
import { TextField, IconButton} from "@material-ui/core";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import * as Yup from "yup";

export const PromptForm = ({handler, engine}) => {
 
  const promptSchema = Yup.object({
    prompt: Yup.string().required('Prompt Required')
  })

  const formik = useFormik({
    validationSchema: promptSchema,
    initialValues: {
      prompt: ""
    },
    onSubmit: (values, { resetForm }) => {
      handler(values)
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={style.prompt}>
        <h1 className={style.prompt__engine}> Current Engine: {engine} </h1>
        <div className={style.prompt__header}>
          <h1 className={style.prompt__header_text}> Enter Prompt </h1>
          <IconButton
            color="primary"
            aria-label="play button"
            component="span"
            onClick={formik.handleSubmit}
          >
            <PlayCircleOutlineIcon fontSize="large" htmlColor="#02604E" />
          </IconButton>
        </div>
        <TextField
          name="prompt"
          placeholder="Prompt"
          variant="outlined"
          type="text"
          margin="dense"
          size="medium"
          multiline
          minRows={10}
          value={formik.values.prompt}
          onChange={formik.handleChange}
          FormHelperTextProps={{ focused: true }}
          error={formik.touched.prompt && Boolean(formik.errors.prompt)}
          helperText={formik.touched.prompt && formik.errors.prompt}
        />
      </form>
    </>
  );
}