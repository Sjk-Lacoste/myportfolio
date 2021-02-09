import { FunctionComponent } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

// interface Props {
//   children: any
// }

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
