import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const project = props.project;
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        p: 3,
        width: "100%",
        height: "100%",
        boxShadow: 10,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        transition: "0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)"
        }
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {project.category}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: {xs: "200px", sm: "400px", md: "250px", lg: "400px"},
          borderRadius: 0.5,
          overflow: "hidden",
          mt: 2,
        }}
      >
        <Box
          component={"img"}
          src={project.image}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 600, mt: 2, flex: 1 }}>
        {project.title}
      </Typography>
      <Button endIcon={<ArrowOutward />} sx={{ fontWeight: 600, p: 0, mt: 1, justifySelf: "flex-end" }}
      onClick={() => navigate(`${project.link}`)}>
        {project.cta}
      </Button>
    </Card>
  );
};

export default ProjectCard;
