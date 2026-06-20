import { CalendarToday } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ClassicCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: props.variant === "row" ? "row" : "column",
        alignItems: { xs: "flex-start", md: "center" },
        borderRight: {
          xs: "none",
          md: props.border === true ? "1px solid #E5E7EB" : "none",
        },
        borderBottom: {
          xs: props.border === true ? "1px solid #E5E7EB" : "none",
          md: "none",
        },
        justifyContent: { xs: "flex-start", md: "center" },
        pb: { xs: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: props.variant === "row" ? "row" : "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            border: "1px solid",
            borderColor: "secondary.main",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.icon}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: "background.paper" }}>
            {props.number}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "background.paper", fontSize: 12 }}
          >
            {props.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassicCard;
