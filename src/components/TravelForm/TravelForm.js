import style from "./TravelForm.module.scss";
import { useFormik } from "formik";
import { TextField, Button, InputAdornment, Paper, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import * as Yup from "yup";

export const TravelForm = ({ handler }) => {
  const stateSchema = Yup.object({
    city: Yup.string().required("City Required"),
    state: Yup.string().required("State Required"),
  });

  const formik = useFormik({
    validationSchema: stateSchema,
    initialValues: {
      city: "",
      state: ""
    },
    onSubmit: (values, { resetForm }) => {
      handler(values)
      resetForm();
    },
  });

  return (
    <div className={style.travelform}>
      <form onSubmit={formik.handleSubmit} className={style.travelform__body}>
        <TextField
          name="city"
          placeholder="City"
          type="text"
          variant="outlined"
          margin="dense"
          size="small"
          value={formik.values.city}
          onChange={formik.handleChange}
          FormHelperTextProps={{ focused: true }}
          error={
            formik.touched.city && Boolean(formik.errors.city)
          }
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          name="state"
          placeholder="State"
          type="text"
          variant="outlined"
          margin="dense"
          size="small"
          value={formik.values.state}
          onChange={formik.handleChange}
          FormHelperTextProps={{ focused: true }}
          error={
            formik.touched.state && Boolean(formik.errors.state)
          }
          helperText={formik.touched.state && formik.errors.state}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={formik.handleSubmit}
                  style={{ paddingRight: "0rem" }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};
