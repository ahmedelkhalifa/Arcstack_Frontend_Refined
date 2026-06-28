import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Nav from "../general/Nav";
import image from "../../assets/homepage_hero.webp";
import { useTranslation } from "react-i18next";
import { ArrowOutward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        height: "100%",
        overflow: "hidden",
        mt: {xs: 15, md: 0}
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
          <Box sx={{ pl: {xs: "36px", md: "64px"}, pr: { xs: "36px", md: 0 } }}>
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
                {t("hero.badge")}
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{ mt: 3, fontSize: { xs: 48, md: 64, lg: 72 } }}
            >
              {t("hero.title.line1")}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: 1,
                color: "primary.main",
                fontSize: { xs: 48, md: 64, lg: 72 },
              }}
            >
              {t("hero.title.line2")}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: 1,
                fontSize: { xs: 48, md: 64, lg: 72 },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: 0,
                  height: "2px",
                  width: 30,
                  bgcolor: "secondary.main",
                },
              }}
            >
              {t("hero.title.line3")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.secondary",
                fontSize: { xs: "16px", md: "14px", lg: "16px" },
                mt: 5,
                width: { xs: "100%", md: "80%", lg: "60%" },
              }}
            >
              {t("hero.description")}
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
                onClick={() => window.open("https://wa.me/905391330540", "_blank")}
              >
                {t("hero.primaryButton")}
              </Button>
              <Button
                variant="outlined"
                endIcon={<ArrowOutward />}
                sx={{ fontWeight: 500, fontSize: { xs: 14, md: 10, lg: 14 } }}
                onClick={() => navigate("/work")}
              >
                {t("hero.secondaryButton")}
              </Button>
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: {xs: "flex-start", md: "center"}, gap: 2, mt: 3, flexDirection: { xs: "column", md: "row" }, }}>
              <Box>
                <AvatarGroup total={24}>
                  <Avatar alt="Remy Sharp" />
                  <Avatar alt="Travis Howard" />
                  <Avatar alt="Agnes Walker" />
                  <Avatar alt="Trevor Henderson" />
                </AvatarGroup>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  {t("hero.socialProof.count")} {t("hero.socialProof.text")}
                </Typography>
              </Box>
            </Box> */}
          </Box>
        </Box>
        <Box sx={{ flex: 1.5, pt: {xs: 0, md: 10} }}>
          <Box
            component={"img"}
            src={image}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
