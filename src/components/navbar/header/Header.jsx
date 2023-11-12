import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "./Header.css";
import headerMan from "../../../assets/images/headerimg.png";
import { color } from "@mui/system";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6} sm={12}>
            <Typography
              variant="p"
              sx={{
                color: "white",
                display: "inline",
                marginRight: "10px",
              }}
            >
              Introducing
            </Typography>
            <Typography variant="p" component="span" sx={{ color: "#057BFF" }}>
              AppXperise
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
                color: "white",
              }}
            >
              The future
            </Typography>

            <Typography
              className="header__text-wrapper-2"
              sx={{
                fontSize: { xs: "24px", sm: "40px", md: "60px", lg: "80px" },
              }}
            >
              <span style={{ color: "white" }}>of</span>
              <span style={{ color: "#057BFF" }}>Games/Apps</span>
              <br />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "30px",
                  md: "1.2rem",
                  lg: "80px",
                  color: "white",
                },
              }}
            >
              developemt.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={12} lg={6}>
            <Box
              className="image"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                className="header__img"
                alt="Man"
                src={headerMan}
                sx={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Button
              variant="outlined"
              sx={{
                margin: { xs: "0px 18px 10px 0px", lg: "0px 18px 0px 0px" },
                color: "white",
                padding: "15px 36px",
              }}
            >
              Get Started{" "}
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "0px 20px 0px 0px",
                padding: "15px 40px",
              }}
            >
              Free Quote
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
