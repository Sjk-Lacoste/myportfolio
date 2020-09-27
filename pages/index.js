import Head from '../components/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <Navbar />

      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am Tshepo Mohlatlole</h1>
                  <h5 className="text-uppercase">Software Engineer</h5>
                  <div className="banner_btns">
                    <Link href="/" className="primary_btn">
                      Hire Me
                    </Link>
                    <Link href="/" className="primary_btn tr_bg">
                      <span>Get CV</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="home_right_img">
                  <img src="/img/banner/home-right.png" alt="Home Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
