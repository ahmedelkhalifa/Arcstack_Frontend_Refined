import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Card(props) {
  const step = props.step;
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        gap: 2,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 25, // center of the circle
          left: 50,
          right: 0,
          borderTop: "2px dashed",
          borderColor: "secondary.main",
          display: {xs: "none", md: "block"}
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 25,
          right: -10,
          width: 10,
          height: 10,
          borderTop: "2px solid",
          borderRight: "2px solid",
          borderColor: "secondary.main",
          transform: "translateY(-50%) rotate(45deg)",
          display: {xs: "none", md: "block"}
        },
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
          fontWeight: "600",
          fontSize: 24,
          color: "secondary.main",
        }}
      >
        {step.number}
      </Box>
      <Typography variant="h6" sx={{ color: "background.paper" }}>
        {step.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "background.paper",
          fontSize: 12,
          width: "70%",
          margin: { xs: "0 auto", md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {step.description}
      </Typography>
    </Box>
  );
}

const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });
  return (
    <Box sx={{ width: "100%", bgcolor: "primary.dark", py: 5 }}>
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 3,
            md: 6,
            lg: 8,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: "secondary.main" }}>
              {t("process.badge")}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "background.default",
                whiteSpace: "pre-line",
                mt: 1,
              }}
            >
              {t("process.title")}
            </Typography>
          </Box>
          <Box sx={{ flex: 3, mt: { xs: 3, md: 0 } }}>
            <Grid container spacing={4}>
              {steps.map((step, index) => (
                <Grid key={index} size={{ xs: 12, md: 3 }}>
                  <Card step={step} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
