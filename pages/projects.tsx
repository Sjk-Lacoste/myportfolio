import { FunctionComponent } from "react";
import Head from "../components/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Portfolio: FunctionComponent = () => {
  return (
    <>
      <Head title="Portfolio" />
      <Navbar />

      <div>My Projects</div>

      <Footer />
    </>
  );
};

export default Portfolio;
