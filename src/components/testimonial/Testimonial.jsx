import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import stars from "../../assets/images/stars.svg";

const TestimonialCard = ({ name, content }) => {
  return (
    <Grid item xs={12} md={12} lg={6} sm={12}>
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          fontSize: { xs: "24px", sm: "40px", md: "60px", lg: "40px" },
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{content}</Typography>
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
          <img src={stars} alt="" style={{ width: "40%" }} />
        </Box>
      </Box>
    </Grid>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "DIANA",
      content:
        "Superb work! Hamza is very flexible with the changing " +
        "conditions of the work & did his best to make the " +
        "best of an unclear situation. Well done!",
    },
    {
      name: "DIANA",
      content:
        "Superb work! Hamza is very flexible with the changing " +
        "conditions of the work & did his best to make the " +
        "best of an unclear situation. Well done!",
    },
    {
      name: "DIANA",
      content:
        "Superb work! Hamza is very flexible with the changing " +
        "conditions of the work & did his best to make the " +
        "best of an unclear situation. Well done!",
    },
    {
      name: "DIANA",
      content:
        "Superb work! Hamza is very flexible with the changing " +
        "conditions of the work & did his best to make the " +
        "best of an unclear situation. Well done!",
    },
  ];

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
          Testimonials
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
          Our Happy Clients
        </Typography>
      </Grid>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </Grid>
  );
};

export default Testimonials;
