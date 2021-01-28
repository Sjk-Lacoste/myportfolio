import React, {FunctionComponent} from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Link from "next/link";

type Props = {
  title: string,
  pageURL: string,
  pageName: string
}

const Banner: FunctionComponent<Props> = ({ title, pageURL, pageName }) => {
  return (
    <>
      <section className="banner_area">
        <Grid container item className="banner_inner" alignItems="center">
          <Container maxWidth="lg">
            <div className="banner_content text-center">
              <Typography component="h2" variant="h2">
                {title}
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
