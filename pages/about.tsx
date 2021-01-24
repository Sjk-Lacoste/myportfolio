import Link from 'next/link';
import { FunctionComponent } from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar/Navbar';

const About: FunctionComponent = () =>  {
  return (
    <>
      <Head title="About Me - SjkFolio" />

      <Navbar />
    </>
  )
}

export default About;