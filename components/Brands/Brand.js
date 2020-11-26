import { Grid } from "@material-ui/core";
import Image from "next/image";

const Brand = (props) => {
  const { image } = props;
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className="single-brand-item d-table">
          <div className="d-table-cell text-center">
            <Image
              src={`/img/brands/${image}.png`}
              unsized
              quality="100"
              alt=""
            />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Brand;
