import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                    <Link href="/">
                      <a className="primary_btn">Hire Me</a>
                    </Link>
                    <Link href="/">
                      <a className="primary_btn tr_bg">Get CV</a>
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

      <section className="about_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="about_img">
                <img
                  className="img"
                  src="/img/about-us.png"
                  alt="About Tshepo"
                />
              </div>
            </div>

            <div className="col-7">
              <div className="main_title text-left">
                <h2>
                  let's <br />
                  Introduce about <br />
                  myself
                </h2>

                <p>
                  I am a junior data engineer and web developer, with experience
                  in developing dynamic and user-friendly websites utilising
                  agile methodologies. My background in web development informs
                  my mindful but competitive approach. My hunger for knowledge
                  and determination to turn information into action has led me
                  to who I am today.
                </p>

                <Link href="/">
                  <a className="primary_btn">Download CV</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
