import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectGallery = ({ screenshots }) => {
  const { t } = useTranslation("workPage");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));

  const next = () =>
    setActiveIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 4, fontSize: { xs: 20, md: 24 } }}
      >
        {t("details.gallery")}
      </Typography>

      {/* Dark gallery container */}
      <Box
        sx={{
          bgcolor: "grey.900",
          borderRadius: 4,
          p: { xs: 2, md: 3 },
        }}
      >
        <Grid container spacing={2}>
          {screenshots.map((src, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Box
                onClick={() => openLightbox(index)}
                sx={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderRadius: 3,
                  cursor: "zoom-in",
                  position: "relative",
                  // hover overlay
                  "&:hover .gallery-overlay": { opacity: 1 },
                  "&:hover img": { transform: "scale(1.04)" },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`screenshot-${index}`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    display: "block",
                  }}
                />
                {/* Hover overlay */}
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.25)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.05em",
                      border: "1px solid rgba(255,255,255,0.6)",
                      px: 2,
                      py: 0.75,
                      borderRadius: 2,
                    }}
                  >
                    View
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Lightbox */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.92)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "95vw", md: "85vw" },
            maxWidth: 1200,
            outline: "none",
          }}
        >
          {/* Close */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: -48,
              right: 0,
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <Close />
          </IconButton>

          {/* Image */}
          <Box
            component="img"
            src={screenshots[activeIndex]}
            alt={`lightbox-${activeIndex}`}
            sx={{
              width: "100%",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 2,
              display: "block",
            }}
          />

          {/* Prev / Next */}
          {screenshots.length > 1 && (
            <>
              <IconButton
                onClick={prev}
                sx={{
                  position: "absolute",
                  left: { xs: 4, md: -56 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ArrowBackIos sx={{ fontSize: 18 }} />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  position: "absolute",
                  right: { xs: 4, md: -56 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ArrowForwardIos sx={{ fontSize: 18 }} />
              </IconButton>

              {/* Dots */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: 2.5,
                }}
              >
                {screenshots.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    sx={{
                      width: i === activeIndex ? 24 : 8,
                      height: 8,
                      borderRadius: 999,
                      bgcolor:
                        i === activeIndex
                          ? "white"
                          : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectGallery;
