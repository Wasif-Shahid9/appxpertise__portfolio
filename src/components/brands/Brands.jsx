import React from "react";
import brandImg from "../../assets/images/brandImg.png";
import { Grid, Typography, Box } from "@mui/material";

const Brands = () => {
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
          #AppXpertise
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
          FEATURED BRANDS
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Box sx={{ margin: "50px 0px" }}>
          <img src={brandImg} alt="Error" style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Brands;
