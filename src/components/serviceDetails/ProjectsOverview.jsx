import { Box, Grid } from "@mui/material";
import React from "react";

function Card(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 1,
        cursor: "pointer",
      }}
    >
      <Box
        component={"img"}
        src={props.img}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        loading="lazy"
      />
    </Box>
  );
}

const ProjectsOverview = (props) => {
  const projects = props.projects;
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Card img={project.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsOverview;
