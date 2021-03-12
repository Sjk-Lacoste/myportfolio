import { FunctionComponent } from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { Container, Grid } from "@material-ui/core";
import { ContactInfo, ContactForm } from "../components/Contact";

const About: FunctionComponent = () => {
  return (
    <>
      <Head title="Contact Me - SjkFolio" />

      <Layout>
        <Banner title="Contact Me" pageURL="/contact" pageName="Contact" />

        <section className="contact_area section_gap">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <ContactInfo />
              <ContactForm />
            </Grid>
            <div id="mapBox" className="mapBox" />
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default About;
