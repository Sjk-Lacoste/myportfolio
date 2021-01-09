import { FunctionComponent } from "react";
import Head from "../components/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner";
import AboutArea from "../components/AboutArea";
import Brands from "../components/Brands/Brands";
import Newsletter from "../components/Newsletter/Newsletter";

const About: FunctionComponent = () => {
  return (
    <>
      <Head title="About Me" />

      <Navbar />

      <Banner title="About Me" pageURL="/about" pageName="About" />

      <AboutArea />

      <Brands />

      <Newsletter />

      <Footer />
    </>
  );
};

export default About;
