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
import AboutArea from "../components/AboutArea";
import Brands from "../components/Brands/Brands";

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

      <AboutArea />

      <Brands />

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
