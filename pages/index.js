import React, { useState } from "react";
import Image from "next/image";
import Head from "../components/head";
import {
  Container,
  Grid,
  Typography,
  Link,
  Tabs,
  Tab,
  makeStyles,
} from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import PortfolioTab from "../components/Tabs/Portfolio";
import Footer from "../components/Footer/Footer";
import { a11yProps } from "../lib/helpers/tabProps";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head title="Home" />

      <Navbar />

      <section className="home_banner_area">
        <div className="banner_inner">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={7} lg={7} className="first-col">
                <div className="banner_content">
                  <Typography
                    component="h1"
                    variant="h3"
                    className="text-uppercase hello"
                  >
                    Hell0
                  </Typography>
                  <Typography component="h1" className="text-uppercase">
                    I am Tshepo Mohlatlole
                  </Typography>
                  <Typography component="h5" className="text-uppercase">
                    Software Engineer
                  </Typography>
                  <div className="banner_btns">
                    <Link href="/" className="primary_btn">
                      Hire Me
                    </Link>
                    <Link href="/" className="primary_btn tr_bg">
                      Get CV
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5} className="second-col">
                <div className="home_right_img">
                  <img src="/img/banner/home-right.png" alt="Home Banner" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>

      <section className="about_area section_gap">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={5} className="col-5">
              <div className="about_img">
                <Image
                  className="img"
                  src="/img/about-us.png"
                  unsized
                  quality="100"
                  alt="About Tshepo"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} className="col-7">
              <div className="main_title text-left">
                <Typography component="h2">
                  let me <br />
                  Introduce <br />
                  myself
                </Typography>

                <Typography component="p">
                  I am a Software Engineer, with experience in developing
                  dynamic and user-friendly websites utilising agile
                  methodologies. My background in web development informs my
                  mindful but competitive approach. My hunger for knowledge and
                  determination to turn information into action has led me to
                  who I am today.
                </Typography>

                <Link href="/" className="primary_btn">
                  Download CV
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="brand_area section_gap_bottom">
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo1.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo2.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo3.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo4.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo5.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo6.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo7.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo8.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <Image
                        src="/img/brands/logo9.png"
                        unsized
                        quality="100"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={2}></Grid>

            <Grid item lg={4}>
              <div className="client-info">
                <div className="d-flex m-b-50">
                  <span className="lage">2</span>
                  <span className="smll">Years Experince Working</span>
                </div>
                <div className="call-now d-flex">
                  <Typography component="p">call me now</Typography>
                  <Typography component="h3">(+27)-71-234-5678</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="features_area">
        <Container maxWidth="lg" justify="center">
          <Grid container spacing={2}>
            <Grid item lg={8} className="text-center">
              <div className="main_title">
                <Typography component="h2">Service offers</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="feature_inner">
            <Grid item md={6} lg={3}>
              <div className="feature_item">
                <Image
                  src="/img/services/s1.png"
                  unsized
                  quality={100}
                  alt=""
                />
                <Typography component="h4">Wp developing</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={3}>
              <div className="feature_item">
                <Image
                  src="/img/services/s3.png"
                  unsized
                  quality={100}
                  alt=""
                />
                <Typography component="h4">Web development</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={3}>
              <div className="feature_item">
                <Image
                  src="/img/services/s4.png"
                  unsized
                  quality={100}
                  alt=""
                />
                <Typography component="h4">SEO optimise</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="portfolio_area" id="portfolio">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="main_title text-left">
                <Typography component="h2">
                  quality work <br /> Recently done projects
                </Typography>
              </div>
            </Grid>
          </Grid>

          <div className={classes.root}>
            <Tabs
              orientation="horizontal"
              // variant="scrollable"
              value={value}
              onChange={handleTabChange}
              aria-label="Portfolio"
              className="filters portfolio-filter"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
            </Tabs>

            <div className="filters-content">
              <PortfolioTab value={value} index={0}>
                Item One
              </PortfolioTab>
              <PortfolioTab value={value} index={1}>
                Item Two
              </PortfolioTab>
              <PortfolioTab value={value} index={2}>
                Item Three
              </PortfolioTab>
              <PortfolioTab value={value} index={3}>
                Item Four
              </PortfolioTab>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
