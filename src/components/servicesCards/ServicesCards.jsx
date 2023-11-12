import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import serviceImg from "../../assets/images/services.png";
const ServicesCards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: { xs: "24px", sm: "40px", md: "60px", lg: "40px" },
            fontFamily: '"Mplus 1p Bold-Bold", Helvetica',
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          What We Provide
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
          Our Services
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Box sx={{ width: "100%" }}>
          <img src={serviceImg} alt="error" style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ServicesCards;
