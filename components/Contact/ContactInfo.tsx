import React from "react";
import Link from "next/link";
import { Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <div className="contact_info">
        <div className="info_item">
          <FontAwesomeIcon icon="home" className="home-icon" />
          <div>
            <Typography component="h6" variant="h6">
              Pretoria, South Africa
            </Typography>
            <Typography variant="body2">Atteridgeville</Typography>
          </div>
        </div>

        <div className="info_item">
          <FontAwesomeIcon icon="phone-alt" className="phone-icon" />
          <div>
            <Typography component="h6" variant="h6">
              <Link href="/">
                <a>+27 79 231 2564</a>
              </Link>
            </Typography>
            <Typography variant="body2">Mon - Fri 09am to 6 pm</Typography>
          </div>
        </div>

        <div className="info_item">
          <FontAwesomeIcon icon="envelope" className="email-icon" />
          <div>
            <Typography component="h6" variant="h6">
              <Link href="/">
                <a>tmohlatlole@gmail.com</a>
              </Link>
            </Typography>
            <Typography variant="body2">Send me your query anytime</Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ContactInfo;
