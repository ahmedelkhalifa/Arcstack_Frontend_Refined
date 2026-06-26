import { CalendarToday } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const CardVariant = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: props.variant === "row" ? "row" : "column",
        alignItems: { xs: "center", md: "center" },
        justifyContent: { xs: "center", md: "center" },
        p: 5,
        boxShadow: 10,
        height: '100%',
        borderRadius: "8px"
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
        <Box>{props.icon}</Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: props.dark === true ? "primary.main" : "background.paper",
              textAlign: "center"
            }}
          >
            {props.number}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: props.dark === true ? "text.secondary" : "background.paper",
              fontSize: 12,
              textAlign: "center",
              mt: 1,
              fontWeight: 500
            }}
          >
            {props.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardVariant;
