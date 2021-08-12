import { FunctionComponent } from 'react';
import Head from '../src/components/Head';
import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';
import AboutArea from '../src/components/AboutArea';
import Brands from '../src/components/Brands/Brands';
import Newsletter from '../src/components/Newsletter/Newsletter';

const About: FunctionComponent = () => {
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
  );
};

export default About;
