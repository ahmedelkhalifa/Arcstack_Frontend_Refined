import { ArrowForwardIos, Language } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ContactCard = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 4,
          bgcolor: "secondary.main",
        },
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 3,
        py: 2,
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        cursor: "pointer",
      }}
      component={"div"}
      onClick={() => window.open(props.link, "_blank")}
    >
      <Box
        sx={{
          bgcolor: "text.primary",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.icon}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", flex: 1 }}>
        <Box sx={{flex: 1}}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 500 }}
          >
            {props.value}
          </Typography>
        </Box>
        <ArrowForwardIos />
      </Box>
    </Box>
  );
};

export default ContactCard;
