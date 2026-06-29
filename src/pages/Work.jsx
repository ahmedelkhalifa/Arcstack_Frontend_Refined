import { Box, Container } from "@mui/material";
import React, { useRef, useState } from "react";
import Nav from "../components/general/Nav";
import FilterBar from "../components/work/FilterBar";
import WorkGrid from "../components/work/WorkGrid";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import { FILTERS } from "../data/workProjects";
import { useTranslation } from "react-i18next";
import PageHelmet from "../components/general/PageHelmet";
import WorkHero from "../components/work/WorkHero";
import image from "../assets/work_hero.webp";
import Hero from "../components/general/Hero";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);
  const filterRef = useRef(null);
  const { t } = useTranslation("workPage");

  return (
    <Box>
      <PageHelmet
        title={t("seo.title")}
        description={t("seo.description")}
        canonical="/work"
      />
      <Box
        sx={{
          height: { xs: "fit-content", md: "100vh" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Nav active="work" />
        <Hero
          image={image}
          badge={t("hero.badge")}
          title={t("hero.title.line1")}
          title2={t("hero.title.line2")}
          description={t("hero.description")}
          variant={"work"}
        />
      </Box>

      <FilterBar
        filterRef={filterRef}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <WorkGrid activeFilter={activeFilter} filterRef={filterRef} />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: "100px" }}
      >
        <CTABar />
      </Container>

      <Footer />
    </Box>
  );
};

export default Work;
