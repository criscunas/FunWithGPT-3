import style from './PromptForm.module.scss';
import { useFormik} from "formik";
import { TextField, Button} from "@material-ui/core";
import * as Yup from "yup";

export const PromptForm = ({handler}) => {
 
  const promptSchema = Yup.object({
    prompt: Yup.string().required('Prompt Required')
  })

  const formik = useFormik({
    validationSchema: promptSchema,
    initialValues: {
      prompt: ""
    },
    onSubmit: (values, { resetForm }) => {
      handler();
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={style.prompt}>
        <h2 className={style.prompt__header}> Enter Prompt </h2>
        <TextField
          name="prompt"
          placeholder='Prompt'
          variant= 'outlined'
          type="text"
          margin='dense'
          size="medium"
          multiline
          minRows={10}
          value={formik.values.prompt}
          onChange={formik.handleChange}
          FormHelperTextProps={{ focused: true }}
          error={formik.touched.prompt && Boolean(formik.errors.prompt)}
          helperText={formik.touched.prompt && formik.errors.prompt}
        />
        <div className={style.prompt__button_container}>
          <Button
            className={style.prompt__button}
            size="small"
            type="submit"
            variant="contained"
          >
            <p className={style.prompt__button_text}> Ready ? </p>
          </Button>
        </div>
      </form>
    </>
  );
}