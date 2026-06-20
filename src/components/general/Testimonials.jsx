import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";

const Testomonials = () => {
  const { t } = useTranslation();
  const reviews = t("testimonials.reviews", { returnObjects: true });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          {t("testimonials.badge")}
        </Typography>
        <Typography variant="h4" sx={{ whiteSpace: "pre-line" }}>
          {t("testimonials.title")}
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ flex: 2.5 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TestimonialCard
            msg={reviews[0].text}
            author={reviews[0].author}
            position={reviews[0].position}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TestimonialCard
            msg={reviews[1].text}
            author={reviews[1].author}
            position={reviews[1].position}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TestimonialCard
            msg={reviews[2].text}
            author={reviews[2].author}
            position={reviews[2].position}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testomonials;
