import { FunctionComponent } from "react";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import Image from "next/image";

const AboutArea: FunctionComponent = () => {
  return (
    <>
      <section className="about_area section_gap">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={5} className="col-5">
              <div className="about_img">
                <Image
                  src="/img/about-us.png"
                  unsized
                  quality="100"
                  alt="Tshepo Mohlatlole"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} className="col-7">
              <div className="main_title text-left">
                <Typography component="h2">
                  let's <br />
                  Introduce about <br />
                  myself
                </Typography>

                <Typography component="p">
                  I am a Software Engineer, with experience in developing
                  dynamic and user-friendly websites utilising agile
                  methodologies.
                </Typography>

                <Typography component="p">
                  My background in web development informs my mindful but
                  competitive approach.
                </Typography>

                <Typography component="p">
                  My hunger for knowledge and determination to turn information
                  into action has led me to who I am today.
                </Typography>

                <Link href="/" className="primary_btn">
                  Download CV
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AboutArea;
