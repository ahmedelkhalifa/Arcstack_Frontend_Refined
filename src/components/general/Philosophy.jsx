import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo_mark.webp";

const Philosophy = () => {
  const { t } = useTranslation("aboutPage");
  return (
    <Box sx={{ width: "100%", py: 3, bgcolor: "primary.dark" }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 3, md: 6, lg: 8 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              position: "relative",
              "&::after": {
                position: "absolute",
                content: '""',
                bottom: -20,
                left: 0,
                height: 2,
                width: "100px",
                bgcolor: "secondary.main",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "secondary.main" }}>
              {t("philosophy.badge")}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "background.default",
                fontSize: {xs: 30, md: 48},
                fontWeight: "500",
                lineHeight: 1,
                mt: 2,
              }}
            >
              {t("philosophy.title.line1")}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "secondary.main",
                fontSize: {xs: 30, md: 48},
                fontWeight: "500",
                fontStyle: "italic",
                lineHeight: 1,
                display: "inline",
              }}
            >
              {t("philosophy.title.highlight")}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "background.default",
                fontSize: {xs: 30, md: 48},
                fontWeight: "500",
                lineHeight: 1,
                display: "inline",
              }}
            >
              {" "}
              {t("philosophy.title.line2")}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "background.default",
              fontSize: 14,
              fontWeight: 500,
              mt: 4,
            }}
          >
            {t("philosophy.description")}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src={logo}
            sx={{ width: "200px", height: "200px", objectFit: "cover" }}
            loading="lazy"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Philosophy;
