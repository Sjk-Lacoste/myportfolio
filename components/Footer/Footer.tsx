import React, { FunctionComponent } from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import packageFile from "../../package.json";

const social = [
  {
    url: "https://linkedin.com/in/tshepo-mohlatlole",
    icon: "linkedin",
  },
  {
    url: "/",
    icon: "twitter",
  },
  {
    url: "/",
    icon: "discord",
  },
  {
    url: "https://github.com/Sjk-Lacoste",
    icon: "github",
  },
];

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
                    <Image
                      src="/logo.png"
                      alt="SjkFolio"
                      quality="100%"
                      width={60}
                      height={60}
                    />
                  </Link>
                  <Typography component="h4">Follow Me</Typography>
                </div>
                <div className="footer_social">
                  {social.map((media: any) => {
                    return (
                      <Link
                        key={Math.random()}
                        href={media.url}
                        target="_target"
                        rel="noopener"
                      >
                        <FontAwesomeIcon icon={["fab", media.icon]} />
                      </Link>
                    );
                  })}
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
