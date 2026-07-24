import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import Nav from "../components/general/Nav";
import Hero from "../components/general/Hero";
import { getServiceData } from "../components/serviceDetails/getServiceData";
import { slugMap } from "../data/slugMap";
import { slugLangMap } from "../data/slugLangMap";
import WhatWeBuild from "../components/serviceDetails/WhatWeBuild";
import ProjectsOverview from "../components/serviceDetails/ProjectsOverview";
import WhatsIncluded from "../components/serviceDetails/WhatsIncluded";
import Process from "../components/general/Process";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";
import NotFound from "./NotFound";

// Build a lookup: serviceId -> { en: slug, tr: slug }
const buildAlternateSlugs = () => {
  /** @type {Record<string, {en: string, tr: string}>} */
  const map = {};
  Object.entries(slugMap).forEach(([slug, id]) => {
    const lang = slugLangMap[slug];
    if (id === undefined || !lang) return;
    if (!map[id]) map[id] = { en: "", tr: "" };
    map[id][lang] = `/services/${slug}`;
  });
  return map;
};
const alternateSlugsById = buildAlternateSlugs();

const ServiceDetails = () => {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  // Resolved during render, not in an effect, so the prerendered HTML for
  // both the English and Turkish slugs contains the real copy.
  const serviceId = slug ? slugMap[slug] : undefined;
  const detectedLang = slug ? slugLangMap[slug] : undefined;
  const service =
    serviceId && detectedLang ? getServiceData(detectedLang, serviceId) : null;

  // Keep the shared i18n instance in step with the slug, so the chrome (nav,
  // footer, CTAs) is in the same language as the page body.
  useEffect(() => {
    if (detectedLang && detectedLang !== i18n.language) {
      i18n.changeLanguage(detectedLang);
    }
  }, [detectedLang, i18n]);

  // When the visitor switches language, move them to the sibling slug.
  useEffect(() => {
    if (!serviceId) return;

    const newSlug = Object.entries(slugMap).find(
      ([s, id]) => id === serviceId && slugLangMap[s] === i18n.language,
    )?.[0];

    if (newSlug && newSlug !== slug) {
      navigate(`/services/${newSlug}`, { replace: true });
    }
  }, [i18n.language, serviceId, slug, navigate]);

  if (!service) {
    return <NotFound />;
  }

  const alternateSlugs = alternateSlugsById[serviceId] || null;
  const seoTitle = `${service.hero.title} ${t("seo.serviceTitleSuffix")}`;
  const seoDescription = service.hero.content || service.hero.description || "";

  return (
    <>
      <PageHelmet
        title={seoTitle}
        description={seoDescription}
        canonical={`/services/${slug}`}
        alternateSlugs={alternateSlugs}
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active="services" />
        <Hero
          image={service.hero.image.src}
          badge={service.hero.badge}
          title={service.hero.title}
          title2={service.hero.description}
          description={service.hero.content}
          type={"details"}
        />
      </Box>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Box sx={{ pb: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "secondary.main", textAlign: "center", mb: 3 }}
          >
            {service.portfolio.title}
          </Typography>
          <ProjectsOverview projects={service.portfolio.projects} />
        </Box>
        <WhatsIncluded content={service} />
        <Box sx={{ pb: "100px" }} />
      </Container>
      <Process />
      <Box sx={{ pb: "100px" }} />
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: "100px" }}>
        <WhatWeBuild service={service.whatWeBuild} />
        <Box sx={{ pb: 4 }} />
        <CTABar />
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetails;
