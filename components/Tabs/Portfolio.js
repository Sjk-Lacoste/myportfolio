import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";

const PortfolioTab = (props) => {
  const { children, value, index, ...other } = props;
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

PortfolioTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default PortfolioTab;
