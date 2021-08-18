import { NextPage } from 'next';
import Banner from '@components/Banner';
import AboutArea from '@components/AboutArea';
import Brands from '@components/Brands/Brands';
import Newsletter from '@components/Newsletter/Newsletter';
import Layout from '@components/Layouts/Layout';

const About: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <Banner title="About Me" pageURL="/about" pageName="About" />

      <AboutArea />

      <Brands />

      <Newsletter />
    </Layout>
  );
};

export default About;
