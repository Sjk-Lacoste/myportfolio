import { FunctionComponent } from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Banner from "../components/Banner";
import AboutArea from '../components/AboutArea';
import Brands from '../components/Brands/Brands';
import Newsletter from '../components/Newsletter/Newsletter';

const About: FunctionComponent = () =>  {
  return (
    <>
      <Head title="About Me - SjkFolio" />

      <Layout>
        <Banner title="About Me" pageURL="/about" pageName="About" />

        <AboutArea />

        <Brands />

        <Newsletter />
      </Layout>
    </>
  )
}

export default About;