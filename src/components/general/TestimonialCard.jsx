import { Star } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const TestimonialCard = (props) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        px: 4,
        py: 2,
        boxShadow: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
        <Star sx={{ color: "secondary.light" }} />
        <Star sx={{ color: "secondary.light" }} />
        <Star sx={{ color: "secondary.light" }} />
        <Star sx={{ color: "secondary.light" }} />
        <Star sx={{ color: "secondary.light" }} />
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: "text.primary",
          mt: 2,
          flex: 1,
        }}
      >
        {props.msg}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 12,
          fontWeight: 700,
          color: "text.primary",
          mt: 1,
          pl: 2,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 10,
            height: 2,
            bgcolor: "primary.main",
          },
        }}
      >
        {props.author}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: "text.secondary",
          pl: 2,
          mt: -0.5,
        }}
      >
        {props.position}
      </Typography>
    </Card>
  );
};

export default TestimonialCard;
