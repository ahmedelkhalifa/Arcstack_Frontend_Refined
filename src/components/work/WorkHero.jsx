import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/homepage_hero.webp";

const WorkHero = () => {
  const { t } = useTranslation("workPage");

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        mt: { xs: 12, md: 0 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 3, md: 6, lg: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 0 },
          height: "100%",
        }}
      >
        {/* Left — text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              color: "secondary.main",
              letterSpacing: "0.08em",
              fontSize: 13,
            }}
          >
            {t("hero.badge")}
          </Typography>

          <Typography
            variant="h1"
            sx={{ mt: 2, fontSize: { xs: 40, md: 52, lg: 64 } }}
          >
            {t("hero.title.line1")}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 40, md: 52, lg: 64 } }}
          >
            {t("hero.title.line2")}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 40, md: 52, lg: 64 },
              color: "primary.main",
            }}
          >
            {t("hero.title.highlight")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "text.secondary",
              fontWeight: 500,
              fontSize: { xs: 15, md: 14, lg: 15 },
              width: { xs: "100%", md: "80%", lg: "65%" },
              lineHeight: 1.7,
            }}
          >
            {t("hero.description")}
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{ mt: 4 }}
            onClick={() => window.open("https://wa.me/905391330540", "_blank")}
          >
            {t("hero.cta")}
          </Button>
        </Box>

        {/* Right — hero image */}
        <Box
          sx={{
            flex: 1.4,
            display: { xs: "none", md: "flex" },
            alignItems: "flex-end",
            justifyContent: "flex-end",
            height: "100%",
            pt: 10,
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="portfolio preview"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHero;
