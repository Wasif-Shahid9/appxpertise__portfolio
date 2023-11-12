import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import aboutImg from "../../assets/images/aboutImg.png";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: { xs: "20px", sm: "30px", md: "60px", lg: "40px" },
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Welcome to AppXpertise
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#057BFF",
            fontSize: { xs: "24px", sm: "40px", md: "60px", lg: "40px" },
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: { xs: "18px", sm: "20px", md: "30px", lg: "40px" },
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontWeight: 600,
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
          }}
        >
          AppXpertise is by far the best unity game development company in the
          market. What that really means is that we’re the best at what we do
          and our goal is to provide you the best services in the App
          Development Industry.
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <img src={aboutImg} alt="Error" style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
