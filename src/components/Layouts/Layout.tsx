import { FC, ReactNode } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { IHeadProps } from '@utils/interfaces';
import Head from '@components/Head';

interface Props extends IHeadProps {
  children?: ReactNode;
}

const Layout: FC<Props> = ({
  children,
  title,
  description,
  keywords,
}): JSX.Element => {
  return (
    <>
      <Head title={title} description={description} keywords={keywords} />
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
