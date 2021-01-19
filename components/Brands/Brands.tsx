import { FunctionComponent } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Brand from "./Brand";
import { generateId } from "../../lib/helpers/generateId";

const brandsData = [
  {
    imageName: "logo1",
  },
  {
    imageName: "logo2",
  },
  {
    imageName: "logo3",
  },
  {
    imageName: "logo4",
  },
  {
    imageName: "logo5",
  },
  {
    imageName: "logo6",
  },
  {
    imageName: "logo7",
  },
  {
    imageName: "logo8",
  },
  {
    imageName: "logo9",
  },
];

const Brands: FunctionComponent = () => {
  return (
    <>
      <section className="brand_area section_gap_bottom">
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <Grid item lg={6}>
              <Grid container spacing={2}>
                {brandsData.map((brand) => (
                  <Brand key={generateId()} image={brand.imageName} />
                ))}
              </Grid>
            </Grid>

            <Grid item lg={2}></Grid>

            <Grid item lg={4}>
              <div className="client-info">
                <div className="d-flex m-b-50">
                  <span className="large">2</span>
                  <span className="small">Years Experience Working</span>
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
    </>
  );
};

export default Brands;
