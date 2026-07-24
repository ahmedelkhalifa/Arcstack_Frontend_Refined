import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowOutward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDetails = props.type === "details";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "hidden",
        mt: { xs: 15, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flex: 1,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{ pl: { xs: "36px", md: "64px" }, pr: { xs: "36px", md: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.300",
                px: 2,
                borderRadius: 5,
                width: "fit-content",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, color: "secondary.main" }}
              >
                {props.badge}
              </Typography>
            </Box>
            {/* One <h1> per page. On non-detail pages title2 is part of the
                headline, so it lives inside the h1 as a span; on detail pages
                it is a subtitle and stays outside. */}
            <Box component="h1" sx={{ m: 0 }}>
              <Typography
                variant="h1"
                component="span"
                sx={{
                  display: "block",
                  mt: 3,
                  fontSize: isDetails
                    ? { xs: "36px", md: "48px" }
                    : { xs: 48, md: 60, lg: 72 },
                  whiteSpace: "pre-line",
                }}
              >
                {props.title}
              </Typography>
              {props.title2 && !isDetails && (
                <Typography
                  variant="h1"
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: { xs: 48, md: 60, lg: 72 },
                    whiteSpace: "pre-line",
                    color: "primary.main",
                    lineHeight: 1,
                  }}
                >
                  {props.title2}
                </Typography>
              )}
            </Box>
            {props.title2 && isDetails && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "24px", md: "36px" },
                  mt: 2,
                  whiteSpace: "pre-line",
                  color: "primary.main",
                  lineHeight: 1,
                }}
              >
                {props.title2}
              </Typography>
            )}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.secondary",
                fontSize: { xs: "16px", md: "14px", lg: "16px" },
                mt: 3,
                width: { xs: "100%", md: "85%", lg: "75%" },
              }}
            >
              {props.description}
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowOutward />}
                sx={{ fontWeight: 500, fontSize: { xs: 14, md: 10, lg: 14 } }}
                onClick={() =>
                  window.open("https://wa.me/905391330540", "_blank")
                }
              >
                {t("hero.primaryButton")}
              </Button>
              {props.variant !== "work" && (
                <Button
                  variant="outlined"
                  endIcon={<ArrowOutward />}
                  sx={{ fontWeight: 500, fontSize: { xs: 14, md: 10, lg: 14 } }}
                  onClick={() => navigate("/work")}
                >
                  {t("hero.secondaryButton")}
                </Button>
              )}
              {props.variant === "work" && (
                <Button
                  variant="outlined"
                  endIcon={<ArrowOutward />}
                  sx={{ fontWeight: 500, fontSize: { xs: 14, md: 10, lg: 14 } }}
                  onClick={() => navigate("/contact")}
                >
                  {t("hero.contactButton")}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1.5, pt: { xs: 0, md: 10 } }}>
          <Box
            component={"img"}
            src={props.image}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
