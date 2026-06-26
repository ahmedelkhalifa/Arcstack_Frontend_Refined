import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { getIcon } from "../utils/getIcon";

function Card({ imgUrl, icon, number, title, text }) {
  const Icon = getIcon(icon);
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%), url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "300px",
        p: 5,
        borderRadius: 2
      }}
    >
      <Icon fontSize="large" sx={{ color: "background.default" }} />
      <Typography variant="h5" sx={{ color: "secondary.main", mt: {xs: 2, lg: 3} }}>
        {number}
      </Typography>
      <Typography variant="h6" sx={{ color: "background.default", mt: 1 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "background.default", fontSize: {xs: 12, lg: 14}, fontWeight: 500, }}
      >
        {text}
      </Typography>
    </Box>
  );
}

const WhatWeBelieve = () => {
  const { t } = useTranslation("aboutPage");
  const items = t("beliefs.items", { returnObjects: true });
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          textAlign: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -10,
            height: 2,
            width: "50px",
            bgcolor: "text.primary",
            transform: "translateX(-50%)",
          },
        }}
      >
        {t("beliefs.title")}
      </Typography>
      <Grid container sx={{ mt: 5 }} spacing={4}>
        {items.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              icon={item.icon}
              number={item.number}
              title={item.title}
              text={item.description}
              imgUrl={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WhatWeBelieve;
