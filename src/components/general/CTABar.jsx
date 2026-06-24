import { Box, Button } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ArrowOutward } from "@mui/icons-material";

const CTABar = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        px: 8,
        py: 5,
        bgcolor: "primary.dark",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 1,
        gap: 3,
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "150px",
          height: "100px",
          bgcolor: "rgba(200, 162, 74, 0.7)",
          borderTopLeftRadius: "100%",
        },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{ color: "background.default", width: { xs: "100%", md: "70%" } }}
        >
          {t("ctaSection.title")}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{ color: "background.default", width: { xs: "100%", md: "70%" } }}
        >
          {t("ctaSection.description")}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            width: { xs: "100%", md: "200px", lg: "250px" },
            zIndex: 100
          }}
          endIcon={<ArrowOutward />}
        >
          {t("ctaSection.button")}
        </Button>
      </Box>
    </Box>
  );
};

export default CTABar;
