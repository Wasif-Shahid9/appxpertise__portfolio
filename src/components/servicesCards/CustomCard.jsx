import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const CustomCard = ({ imageSrc, title, content }) => {
  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={imageSrc}
          alt="Error"
          style={{ width: "100%", borderRadius: "60px" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            background: "black",
            opacity: "0.7",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
            padding: {
              lg: "0px 20px",
              md: "0px",
              sm: "0px 30px",
              xs: "0px 30px",
            },
            height: "70%",
            borderRadius: "10%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: { xs: "10px", md: "30px" },
              fontWeight: 700,
              fontSize: { xs: "20px", md: "20px", lg: "30px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "15px", lg: "20px" },
              wordWrap: "break-word",
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default CustomCard;
