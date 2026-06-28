import { ArrowForward } from "@mui/icons-material";
import { Box, Card, Chip, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PROJECT_TYPE } from "../../data/workProjects";

const WorkCard = ({ project }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("workPage");

  const isLive = project.type === PROJECT_TYPE.PROJECT;

  return (
    <Card
      onClick={() => navigate(`/work/${project.slug}`)}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 10 },
        "&:hover .work-card-arrow": {
          bgcolor: "primary.main",
          color: "background.default",
          borderColor: "primary.main",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.03)" },
          }}
        />

        {/* Live / Design badge */}
        <Chip
          label={t(`typeBadge.${project.type}`)}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.04em",
            bgcolor: isLive ? "primary.main" : "background.default",
            color: isLive ? "background.default" : "text.primary",
            border: isLive ? "none" : "1px solid",
            borderColor: "divider",
            height: 24,
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "secondary.main",
            mb: 0.5,
          }}
        >
          {project.category}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1,
            flex: 1,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: { xs: 15, md: 16 }, lineHeight: 1.3 }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: 13, mt: 0.5, lineHeight: 1.6 }}
            >
              {project.description}
            </Typography>
          </Box>

          <IconButton
            className="work-card-arrow"
            size="small"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "50%",
              width: 32,
              height: 32,
              flexShrink: 0,
              mt: 0.5,
              transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
            }}
          >
            <ArrowForward sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default WorkCard;
