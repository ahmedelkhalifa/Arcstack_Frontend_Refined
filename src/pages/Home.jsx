import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import Hero from "../components/home/Hero";
import FeaturesPaper from "../components/general/FeaturesPaper";
import { useTranslation } from "react-i18next";
import { ArrowOutward } from "@mui/icons-material";
import { getProjects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

const Home = () => {
  const { t } = useTranslation();
  const projects = getProjects(t).filter((p) => p.featured === true);
  return (
    <Box>
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav />
        <Hero />
        <FeaturesPaper />
        <Container
          maxWidth="xl"
          sx={{
            py: "100px",
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
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                {t("portfolio.badge")}
              </Typography>
              <Typography variant="h4" sx={{ color: "text.primary" }}>
                {t("portfolio.title")}
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowOutward />}
              sx={{ fontWeight: 600, display: { xs: "none", md: "flex" } }}
            >
              {t("portfolio.viewAll")}
            </Button>
          </Box>
          <Grid container sx={{ mt: 8 }} spacing={3}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
          <Button
            endIcon={<ArrowOutward />}
            sx={{ fontWeight: 600, display: { xs: "flex", md: "none" }, mt: 4, width: "100%" }}
            variant="contained"
          >
            {t("portfolio.viewAll")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
