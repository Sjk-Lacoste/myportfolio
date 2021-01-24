import React, { FunctionComponent, ReactNode } from "react";
import { Typography, Box } from "@material-ui/core";

type Props = {
  children: ReactNode
  value: any,
  index: number,
  other?: any
}

const PortfolioTab: FunctionComponent<Props> = ({ children, value, index, ...other }) => {
  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`p-tabpanel-${index}`}
        aria-labelledby={`p-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
};

export default PortfolioTab;
