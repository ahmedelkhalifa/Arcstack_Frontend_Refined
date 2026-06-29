import { ArrowBack, ArrowOutward } from "@mui/icons-material";
import { Box, Button, Chip, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";
import CTABar from "../components/general/CTABar";
import ProjectGallery from "../components/projectDetails/ProjectGallery";
import { getWorkProjects, PROJECT_TYPE } from "../data/workProjects";
import PageHelmet from "../components/general/PageHelmet";

const SITE_URL = "https://arcstack.online";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("workPage");

  const allProjects = getWorkProjects(t);
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Box>
        <Nav />
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 20, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Project not found
          </Typography>
          <Button variant="contained" onClick={() => navigate("/work")}>
            Back to Work
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  const isLive = project.type === PROJECT_TYPE.PROJECT;

  const seoTitle = `${project.title} ${t("seo.projectTitleSuffix")}`;
  const seoDescription = project.detailsDescription;

  // Use the project's cover image as OG image when it's an imported asset.
  // Vite resolves imports to hashed paths — in production these are absolute
  // paths served from the same origin, so we prepend SITE_URL.
  const ogImage = project.image
    ? `${SITE_URL}${project.image}`
    : undefined;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": seoDescription,
    "url": `${SITE_URL}/work/${project.slug}`,
    "image": ogImage || `${SITE_URL}/og-image.png`,
    "creator": {
      "@type": "Organization",
      "name": "ArcStack",
      "url": SITE_URL,
    },
  };

  return (
    <Box>
      <PageHelmet
        title={seoTitle}
        description={seoDescription}
        canonical={`/work/${project.slug}`}
        ogImage={ogImage}
        jsonLd={creativeWorkJsonLd}
      />

      <Nav active="work" />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 3, md: 6, lg: 8 }, pt: { xs: 14, md: 18 }, pb: 12 }}
      >
        {/* Back button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/work")}
          variant="text"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            fontSize: 13,
            mb: 6,
            px: 0,
            "&:hover": { color: "text.primary", bgcolor: "transparent" },
          }}
        >
          {t("details.backToWork")}
        </Button>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            gap: 3,
            mb: 4,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
              <Chip
                label={t(`typeBadge.${project.type}`)}
                size="small"
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  bgcolor: isLive ? "primary.main" : "background.paper",
                  color: isLive ? "background.default" : "text.primary",
                  border: isLive ? "none" : "1px solid",
                  borderColor: "divider",
                  height: 24,
                }}
              />
              <Chip
                label={project.category}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: "secondary.main",
                  borderColor: "secondary.main",
                  height: 24,
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 32, md: 48 }, lineHeight: 1.1 }}
            >
              {project.title}
            </Typography>
          </Box>

          {isLive && project.link && project.link !== "#" && (
            <Button
              variant="contained"
              endIcon={<ArrowOutward />}
              onClick={() => window.open(project.link, "_blank")}
              sx={{ flexShrink: 0 }}
            >
              {t("details.livePreview")}
            </Button>
          )}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          {project.detailsDescription}
        </Typography>

        <ProjectGallery screenshots={project.screenshots} />

        <Box sx={{ mt: 12 }}>
          <CTABar />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default ProjectDetails;
