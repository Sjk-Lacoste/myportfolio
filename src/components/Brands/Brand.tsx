import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
// import Image from "next/image";

type Props = {
  title: string
  image: string
}

const Brand: FunctionComponent<Props> = ({title, image}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className="single-brand-item d-table">
          <div className="d-table-cell text-center">
            <img
              src={`/images/brands/${image}.png`}
              alt={title}
            />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Brand;
