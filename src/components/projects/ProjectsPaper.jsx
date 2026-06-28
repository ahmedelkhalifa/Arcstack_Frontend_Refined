import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { getProjects } from "../../data/projects";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

const ProjectsPaper = () => {
  const { t } = useTranslation();
  const projects = getProjects(t).filter((p) => p.featured === true);
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%" }}>
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
          onClick={() => navigate("/work")}
        >
          {t("portfolio.viewAll")}
        </Button>
      </Box>
      <Grid container sx={{ mt: 8 }} spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Button
        endIcon={<ArrowOutward />}
        sx={{
          fontWeight: 600,
          display: { xs: "flex", md: "none" },
          mt: 4,
          width: "100%",
        }}
        variant="contained"
      >
        {t("portfolio.viewAll")}
      </Button>
    </Box>
  );
};

export default ProjectsPaper;
