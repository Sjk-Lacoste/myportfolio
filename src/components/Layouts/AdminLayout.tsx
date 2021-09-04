import React, { FC, useEffect, ReactNode } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { Typography } from '@material-ui/core';
import { useAppContext } from '@context/AppContext';
import { IContext, IHeadProps } from '@utils/interfaces';
import Head from '@components/Head';

interface Props extends IHeadProps {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({
  children,
  title,
  description,
  keywords,
}): JSX.Element => {
  const { isAuthenticated } = useAppContext() as IContext;

  useEffect(() => {
    (() => {
      console.log('Context: ', isAuthenticated);
    })();
  }, []);

  if (isAuthenticated) {
    return (
      <>
        <Head title={title} description={description} keywords={keywords} />

        <>{children}</>
      </>
    );
  }

  return (
    <>
      <Head title={title} description={description} keywords={keywords} />
      <Navbar />
      <Typography variant="h4">Please login first</Typography>
      <Footer />
    </>
  );
};

export default AdminLayout;
