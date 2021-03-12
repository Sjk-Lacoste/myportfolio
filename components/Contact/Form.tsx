import { SyntheticEvent, useState } from "react";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TextField,
  FormControl,
  Grid,
  Button,
  Snackbar,
} from "@material-ui/core";
import axios from "axios";
import { Alert } from "../Atoms";

interface contactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const initialValues: contactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleClose = (_event?: SyntheticEvent) => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={12} md={9} lg={9} className="contact_form">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await axios
            .post("/api/send-email", {
              data: JSON.stringify(values),
            })
            .then((res?: any) => {
              console.log(JSON.stringify(res, null, 2));
              setOpen(true);
              setIsSent(true);
              setSuccessMsg("You have successfully sent a message");
              resetForm({
                values: {
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                },
              });
            })
            .catch((err?: any) => {
              console.log(JSON.stringify(err, null, 2));
              setOpen(true);
              setIsError(true);
              setErrorMsg("Oops! Some error occurred, please try again later");
            });

          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField
                        label="Full Name"
                        variant="outlined"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur("name")}
                        onChange={handleChange("name")}
                        error={!!errors.name}
                        helperText={errors.name}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChange={handleChange("email")}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField
                        label="Subject"
                        variant="outlined"
                        name="subject"
                        value={values.subject}
                        onBlur={handleBlur("subject")}
                        onChange={handleChange("subject")}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={8}
                    fullWidth
                    className="message-input"
                    name="message"
                    value={values.message}
                    onBlur={handleBlur("message")}
                    onChange={handleChange("message")}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <div className="btn-wrapper">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="primary_btn"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <FontAwesomeIcon icon="spinner" pulse /> : null
                }
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {isSent && (
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {successMsg}
                </Alert>
              </Snackbar>
            )}

            {isError && (
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  {errorMsg}
                </Alert>
              </Snackbar>
            )}
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default ContactForm;
