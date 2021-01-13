import { FunctionComponent } from "react";
import Head from "../components/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Services: FunctionComponent = () => {
  return (
    <>
      <Head title="Portfolio" />
      <Navbar />

      <div>My Services</div>

      <Footer />
    </>
  );
};

export default Services;