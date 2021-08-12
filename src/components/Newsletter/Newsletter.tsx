import { FC } from 'react';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core';
import { Formik, Form } from 'formik';

interface MyFormValues {
  email: string;
}

const Newsletter: FC<{}> = () => {
  const initialValues: MyFormValues = { email: '' };

  return (
    <>
      <section className="newsletter_area">
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="subscription_box text-center">
                <Typography
                  component="h2"
                  className="text-uppercase text-white"
                >
                  get update from anywhere
                </Typography>

                <Typography component="p" className="text-white">
                  Bearing Void gathering light his evening unto don't afraid
                </Typography>

                <div className="subscribe-form" id="mc_embed_signup">
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(data) => {
                      console.log('Form data: ', data);
                    }}
                  >
                    {({ values, handleChange, handleBlur }) => (
                      <Form className="subscription relative">
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={12} md={7}>
                            <FormControl fullWidth variant="outlined">
                              <TextField
                                label="Email Address"
                                type="email"
                                name="email"
                                fullWidth
                                required
                                variant="outlined"
                                className="subscription-email"
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12} md={5}>
                            <FormControl fullWidth>
                              <Button
                                type="submit"
                                className="primary-btn hover"
                                variant="contained"
                                // disabled={isSubmitting}
                              >
                                Get Started
                              </Button>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                  {/* <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions, { resetForm }) => {
                      console.log(values, actions);
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                      resetForm({ values: '' });
                    }}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      isSubmitting,
                      handleSubmit,
                      values,
                    }) => (
                      <Form className="subscription relative">
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={12} md={7}>
                            <FormControl fullWidth variant="outlined">
                              <TextField
                                label="Email Address"
                                type="email"
                                name="email"
                                fullWidth
                                required
                                variant="outlined"
                                className="subscription-email"
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12} md={5}>
                            <FormControl fullWidth>
                              <Button
                                type="submit"
                                className="primary-btn hover"
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                              >
                                Get Started
                              </Button>
                            </FormControl>
                          </Grid>
                        </Grid>

                        <div className="info" />
                      </Form>
                    )}
                  </Formik> */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
