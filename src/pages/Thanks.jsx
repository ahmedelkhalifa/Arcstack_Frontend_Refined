import { ArrowForward, Check } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Nav from "../components/general/Nav";
import { useNavigate } from "react-router-dom";
import PageHelmet from "../components/general/PageHelmet";

const Thanks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PageHelmet
        title={t("seo.thanks.title")}
        canonical="/thank-you"
        noindex={true}
      />
      <Nav />
      <Box
        sx={{
          width: "100px",
          height: "100px",
          bgcolor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <Check fontSize="large" sx={{ color: "background.default" }} />
      </Box>
      <Typography variant="h1" sx={{ mt: 3, fontSize: { xs: 48, md: 72 } }}>
        {t("thanks.title")}
      </Typography>
      <Typography
        variant="h4"
        sx={{ mt: 3, width: "50%", textAlign: "center", fontSize: { xs: 24, md: 36 } }}
      >
        {t("thanks.text")}
      </Typography>
      <Button
        variant="contained"
        endIcon={<ArrowForward />}
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        {t("thanks.button")}
      </Button>
    </Box>
  );
};

export default Thanks;
