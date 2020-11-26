import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Link from "next/link";

const Banner = (props) => {
  const { title, pageURL, pageName } = props;
  return (
    <>
      <section className="banner_area">
        <Grid container item className="banner_inner" alignItems="center">
          <Container maxWidth="lg">
            <div className="banner_content text-center">
              <Typography component="h2" variant="h2">
                About Me
              </Typography>
              <div className="page_link">
                <Link href="/">Home</Link>
                <b>
                  <Link href={pageURL}>{pageName}</Link>
                </b>
              </div>
            </div>
          </Container>
        </Grid>
      </section>
    </>
  );
};

export default Banner;
