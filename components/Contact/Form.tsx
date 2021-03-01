import { Formik, Form } from "formik";
import { TextField, FormControl, Grid, Button } from "@material-ui/core";
interface contactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm = () => {
  const initialValues: contactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  return (
    <Grid item xs={12} sm={12} md={9} lg={9} className="contact_form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Contact Form", values);
        }}
      >
        {({ values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextField label="Subject" variant="outlined" fullWidth />
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
              >
                Send Message
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default ContactForm;
