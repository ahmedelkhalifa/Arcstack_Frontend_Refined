import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";

/**
 * Prerendered to dist/404.html, which Vercel serves with a real 404 status.
 * Also acts as the client-side catch-all after in-app navigation.
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <PageHelmet title="Page not found — ArcStack" noindex={true} />
      <Nav />
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: 72, md: 120 }, color: "primary.main" }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ mt: 2, fontSize: { xs: 24, md: 32 } }}>
          This page doesn&apos;t exist
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: "text.secondary", maxWidth: 460 }}
        >
          The link may be broken or the page may have been moved.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{ mt: 4 }}
          onClick={() => navigate("/")}
        >
          Back to home
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default NotFound;
