import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FILTERS, getWorkProjects } from "../../data/workProjects";
import WorkCard from "./WorkCard";

const ITEMS_PER_PAGE = 6;

const WorkGrid = ({ activeFilter, filterRef }) => {
  const { t } = useTranslation("workPage");
  const [page, setPage] = useState(1);

  const allProjects = getWorkProjects(t);

  const filtered =
    activeFilter === FILTERS.ALL
      ? allProjects
      : allProjects.filter((p) => p.filter === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const scrollToFilters = () => {
    filterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const changePage = (newPage) => {
    setPage(newPage);
    scrollToFilters();
  };

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  const pageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const PageBox = ({ children, onClick, active, disabled }) => (
    <Box
      onClick={disabled ? undefined : onClick}
      sx={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid",
        borderColor: active ? "text.primary" : "divider",
        borderRadius: 1,
        cursor: disabled ? "not-allowed" : "pointer",
        bgcolor: active ? "text.primary" : "transparent",
        opacity: disabled ? 0.4 : 1,
        transition: "all 0.2s",
        "&:hover": !disabled && !active ? { bgcolor: "grey.100" } : {},
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          fontSize: 13,
          color: active ? "background.default" : "text.primary",
          lineHeight: 1,
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Grid container spacing={3}>
          {paginated.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
              <WorkCard project={project} />
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 6,
            }}
          >
            <PageBox
              onClick={() => changePage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              <ArrowBack sx={{ fontSize: 16 }} />
            </PageBox>

            {pageNumbers().map((num, idx) =>
              num === "..." ? (
                <Typography
                  key={`ellipsis-${idx}`}
                  variant="body2"
                  sx={{ px: 1, color: "text.secondary" }}
                >
                  ...
                </Typography>
              ) : (
                <PageBox
                  key={num}
                  onClick={() => changePage(num)}
                  active={page === num}
                >
                  {num}
                </PageBox>
              )
            )}

            <PageBox
              onClick={() => changePage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              <ArrowForward sx={{ fontSize: 16 }} />
            </PageBox>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default WorkGrid;
