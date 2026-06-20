import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import Hero from "../components/home/Hero";
import FeaturesPaper from "../components/general/FeaturesPaper";
import { useTranslation } from "react-i18next";
import { ArrowOutward } from "@mui/icons-material";
import { getProjects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsPaper from "../components/projects/ProjectsPaper";
import ServicesPaper from "../components/services/ServicesPaper";
import Process from "../components/general/Process";
import Testomonials from "../components/general/Testimonials";
import CTABar from "../components/general/CTABar";

const Home = () => {
  const { t } = useTranslation();
  
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
          <ProjectsPaper />
          <Box sx={{pb: "100px"}}/>
          <ServicesPaper />
        </Container>
        <Process />
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
          <Testomonials />
          <Box sx={{pb: "100px"}}/>
          <CTABar />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
