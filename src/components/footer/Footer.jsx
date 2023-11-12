import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Grid container spacing={15}>
      <Grid item xs={12} lg={3}>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "700",
          }}
        >
          Appxpertise is a technology consulting organization that builds,
          designs and delivers top services to enterprises along with in-house
          30+ developers
        </Typography>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "500",
          }}
        >
          Company
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "700",
          }}
        >
          <br /> What we do How it works Portfolio Contact us Careers Events
        </Typography>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "500",
          }}
        >
          SERVICES
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "700",
          }}
        >
          <br />
          <p>Web Development</p>
          <p> Mobile Development</p>
          <p> AI/ML Graphic</p>
          <p>Graphic Design</p>
          <p>UI/UX</p>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "500",
          }}
        >
          LAHORE
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "24px" },
            fontWeight: "700",
          }}
        >
          <br />
          LAHORE Allama Iqbal Town Lahore, pk. Telephone: (+92 333 7722779)
          Email: info@appxpertise.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
