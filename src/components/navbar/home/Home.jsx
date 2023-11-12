import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import About from "../../about/About";
import Brands from "../../brands/Brands";
import Footer from "../../footer/Footer";
import ServicesCards from "../../servicesCards/ServicesCards";
import Testimonial from "../../testimonial/Testimonial";
import Header from "../header/Header";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#1f3b5a", height: "100%", width: "100%" }}>
        <Box sx={{ margin: "auto", width: "80%" }}>
          <Navbar />
          <Box sx={{ marginTop: "120px" }}>
            <Header />
          </Box>
          <Box sx={{ marginTop: "120px" }}>
            <About />
          </Box>
          <Box sx={{ margin: "120px 0px" }}>
            <ServicesCards />
          </Box>
          <Box sx={{ margin: "120px 0px" }}>
            <Testimonial />
          </Box>
          <Box sx={{ margin: "120px 0px" }}>
            <Brands />
          </Box>
        </Box>
        <Box sx={{ width: "95%", margin: "auto" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
