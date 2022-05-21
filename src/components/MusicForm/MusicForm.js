import style from './MusicForm.module.scss';
import {Grid, Button, Icon} from "@material-ui/core";
import Image from 'next/image';
import { Formik, Field, Form } from "formik";
import styled from 'styled-components';

const IconDiv = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

  
export const MusicForm = ({handler}) => {

  return (
    <div className={style.musicForm}>
      <Formik
        initialValues={{
          checked: [],
        }}
        onSubmit={async (values) => {
          handler(values)
        }}
      >
        {() => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h1 className={style.musicForm__title}>
                  How are we feeling today?
                </h1>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/glassesEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height="15px"
                      alt="cowboy emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="relaxed"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/loveEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="love emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="love"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/angryEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="angry emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="angry"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/happyEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="happy emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="happy"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={12}>
                <h1 className={style.musicForm__title}>Today's Activity?</h1>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/sleepEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="sleeping emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="sleeping"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/partyEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="party emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="party"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/liftingEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="lifting emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="exercise"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/yogaEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="yoga emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="relax"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={12}>
                <h1 className={style.musicForm__title}>Select an instrument</h1>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/guitarEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="guitar emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="guitar"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/drumEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt=" drum emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="drum"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/keyboardEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="keyboard emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="keyboard"
                    />
                  </label>
                </IconDiv>
              </Grid>
              <Grid item xs={3}>
                <IconDiv>
                  <Icon>
                    <Image
                      src="/images/violinEmoji.svg"
                      layout="responsive"
                      width="20px"
                      height ="15px"
                      alt="violin emoji"
                    />
                  </Icon>
                  <label>
                    <Field
                      className={style.musicForm__field}
                      type="checkbox"
                      name="checked"
                      value="violin"
                    />
                  </label>
                </IconDiv>
              </Grid>
            </Grid>
            <IconDiv>
              <Button
                type = "submit"
                variant="contained"
                style={{
                  backgroundColor: "#004C3F",
                  color: "white",
                  marginTop: "1.5rem",
                }}
              >
                Submit
              </Button>
            </IconDiv>
          </Form>
        )}
      </Formik>
    </div>
  );
}