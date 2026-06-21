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

const Hero = (props) => {
  const { t } = useTranslation();
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
            <Typography
              variant="h1"
              sx={{
                mt: 3,
                fontSize: { xs: 48, md: 60, lg: 72 },
                whiteSpace: "pre-line",
              }}
            >
              {props.title}
            </Typography>
            {props.title2 && (
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 48, md: 60, lg: 72 },
                  whiteSpace: "pre-line",
                  color: "primary.main",
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
              >
                {t("hero.primaryButton")}
              </Button>
              <Button
                variant="outlined"
                endIcon={<ArrowOutward />}
                sx={{ fontWeight: 500, fontSize: { xs: 14, md: 10, lg: 14 } }}
              >
                {t("hero.secondaryButton")}
              </Button>
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
