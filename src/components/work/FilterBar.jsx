import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { FILTERS } from "../../data/workProjects";

const FilterBar = ({ activeFilter, onFilterChange, filterRef }) => {
  const { t } = useTranslation("workPage");

  const filters = [
    { key: FILTERS.ALL, label: t("filters.all") },
    { key: FILTERS.BUSINESS, label: t("filters.business") },
    { key: FILTERS.ECOMMERCE, label: t("filters.ecommerce") },
    { key: FILTERS.SYSTEMS, label: t("filters.systems") },
  ];

  return (
    <Box
      ref={filterRef}
      sx={{
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 0, md: 6, lg: 8 } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <Box
                key={f.key}
                onClick={() => onFilterChange(f.key)}
                sx={{
                  px: { xs: 2.5, md: 0 },
                  mr: { xs: 0, md: 4 },
                  py: 2.5,
                  cursor: "pointer",
                  flexShrink: 0,
                  borderBottom: "2px solid",
                  borderColor: isActive ? "text.primary" : "transparent",
                  mb: "-1px", // sit on top of container border
                  transition: "border-color 0.2s",
                  "&:hover": {
                    borderColor: isActive ? "text.primary" : "text.disabled",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isActive ? 700 : 500,
                    fontSize: { xs: 11, md: 12 },
                    letterSpacing: "0.05em",
                    color: isActive ? "text.primary" : "text.secondary",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FilterBar;
