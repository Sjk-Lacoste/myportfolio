import React, { FunctionComponent, ReactNode } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";

type Props = {
  children: ReactNode
  value: string,
  index?: string,
  other: any
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
