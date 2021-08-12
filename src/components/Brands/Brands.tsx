import { FunctionComponent } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Brand from './Brand';
import { generateId } from '../../utils/helpers/generateId';

const brandsData = [
  {
    title: 'Image 1',
    imageName: 'logo1',
    width: 97,
    height: 49,
  },
  {
    title: 'Image 2',
    imageName: 'logo2',
    width: 119,
    height: 45,
  },
  {
    title: 'Image 3',
    imageName: 'logo3',
    width: 103,
    height: 41,
  },
  {
    title: 'Image 4',
    imageName: 'logo4',
    width: 112,
    height: 30,
  },
  {
    title: 'Image 6',
    imageName: 'logo5',
    width: 107,
    height: 46,
  },
  {
    title: 'Image 8',
    imageName: 'logo6',
    width: 94,
    height: 45,
  },
  {
    title: 'Image 7',
    imageName: 'logo7',
    width: 110,
    height: 43,
  },
  {
    title: 'Image 8',
    imageName: 'logo8',
    width: 110,
    height: 43,
  },
  {
    title: 'Image 9',
    imageName: 'logo9',
    width: 98,
    height: 60,
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
                {brandsData.map((brand: any) => (
                  <Brand
                    key={generateId()}
                    title={brand.title}
                    image={brand.imageName}
                  />
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
