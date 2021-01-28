import { FunctionComponent, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Tabs,
  Tab
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Image from "next/image";
import Head from "../components/Head";
import Navbar from "../components/Navbar/Navbar";
import Brands from "../components/Brands/Brands";
import AboutArea from '../components/AboutArea';
import PortfolioTab from '../components/Tabs/Portfolio';
import Footer from "../components/Footer/Footer";

import { a11yProps } from "../utils/helpers/tabProps";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
}));

const Index: FunctionComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Head title="Home - SjkFolio" />
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
                    <Link href="/" className="primary_btn_outline tr_bg">
                      Get CV
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5} className="second-col">
                <div className="home_right_img">
                  <Image
                    src="/images/banner/home-right.png"
                    alt="Home Banner"
                    width={724}
                    height={703}
                    layout="responsive"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>

      <AboutArea />

      <Brands />

      <section className="features_area">
        <Container maxWidth="lg">
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
                  src="/images/services/s1.png"
                  quality={100}
                  alt=""
                  width={63}
                  height={69}
                  layout="intrinsic"
                />
                <Typography component="h4">Wp developing</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={3}>
              <div className="feature_item">
                <Image
                  src="/images/services/s3.png"
                  quality={100}
                  alt=""
                  width={64}
                  height={68}
                  layout="intrinsic"
                />
                <Typography component="h4">Web development</Typography>
                <Typography component="p"></Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={3}>
              <div className="feature_item">
                <Image
                  src="/images/services/s4.png"
                  quality={100}
                  alt=""
                  width={68}
                  height={68}
                  layout="intrinsic"
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
  )
}

export default Index
