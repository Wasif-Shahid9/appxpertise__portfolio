import React from "react";
import { Grid, Typography, Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import card1 from "../../assets/images/card1.jpeg";
import card2 from "../../assets/images/card2.jpeg";
import CustomCard from "./CustomCard";

const ServicesCards = () => {
  return (
    <Grid container spacing={10}>
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

      <CustomCard
        imageSrc={card1}
        title="What We Provide"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor delectus architecto quo quasi reiciendis hic accusamus esse doloremque cum corrupti!"
      />
      <CustomCard
        imageSrc={card2}
        title="What We Provide"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor delectus architecto quo quasi reiciendis hic accusamus esse doloremque cum corrupti!"
      />
      <CustomCard
        imageSrc={card2}
        title="What We Provide"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor delectus architecto quo quasi reiciendis hic accusamus esse doloremque cum corrupti!"
      />
    </Grid>
  );
};

export default ServicesCards;
