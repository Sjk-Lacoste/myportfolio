import React, { FunctionComponent } from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import packageFile from "../../package.json";

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer className="footer_area">
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <Link href="/">
                    <img src="/logo.png" alt="SjkFolio" />
                  </Link>
                  <Typography component="h4">Follow Me</Typography>
                </div>
                <div className="footer_social">
                  <Link href="#">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </Link>

                  <Link href="#">
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justify="center"
            className="footer_bottom"
          >
            <Grid item xs={12} sm={12} md={12} lg={8} className="footer-text">
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              Developed <Link href="/">Tshepo Mohlatlole</Link> |{" "}
              {`Version ${packageFile.version}`}
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
