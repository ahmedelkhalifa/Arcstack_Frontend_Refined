import { Box, Divider, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import logo from "../../assets/logo_transparent_white.webp";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getServices } from "../../data/services";
import {
  Email,
  Facebook,
  Instagram,
  LocationCity,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const services = getServices(t);
  const quickLinks = t("footer.company", { returnObjects: true });
  return (
    <Box sx={{ width: "100%", bgcolor: "text.primary" }}>
      <Container
        maxWidth="xl"
        sx={{
          py: 5,
          px: {
            xs: 3,
            md: 6,
            lg: 8,
          },
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: 'flex-start',
          gap: {xs: 4, md: 2},
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Box component={"img"} src={logo} sx={{ width: "200px" }} />
          <Typography
            variant="body1"
            sx={{
              color: "background.default",
              fontSize: 14,
              width: "70%",
              mt: 1,
            }}
          >
            {t("footer.brand.description")}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
            <Tooltip title="@arcstack.dev">
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid",
                  borderColor: "background.default",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/arcstack.dev/",
                    "_blank",
                  )
                }
              >
                <Instagram
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Arcstack">
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid",
                  borderColor: "background.default",
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61586613479348",
                    "_blank",
                  )
                }
              >
                <Facebook
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Arcstack">
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid",
                  borderColor: "background.default",
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61586613479348",
                    "_blank",
                  )
                }
              >
                <WhatsApp
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ color: "background.default", fontWeight: 700 }}
          >
            {quickLinks[0]}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: "background.default",
                fontSize: 14,
              }}
              component={"div"}
              onClick={() => navigate("/")}
            >
              {t("navbar.menu.home")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: "background.default",
                fontSize: 14,
              }}
              component={"div"}
              onClick={() => navigate("/services")}
            >
              {t("navbar.menu.services")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: "background.default",
                fontSize: 14,
              }}
              component={"div"}
              onClick={() => navigate("/work")}
            >
              {t("navbar.menu.work")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: "background.default",
                fontSize: 14,
              }}
              component={"div"}
              onClick={() => navigate("/about")}
            >
              {t("navbar.menu.about")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: "background.default",
                fontSize: 14,
              }}
              component={"div"}
              onClick={() => navigate("/contact")}
            >
              {t("navbar.menu.contact")}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ color: "background.default", fontWeight: 600 }}
          >
            {t("footer.services")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            {services.map((service, index) => (
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: "background.default",
                  cursor: "pointer",
                }}
                component={"div"}
                onClick={() => navigate(`services/${service.slug}`)}
              >
                {service.title}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ color: "background.default", fontWeight: 600 }}
          >
            {t("footer.contact.title")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ color: "background.default" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "background.default",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                arcstack.swe@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WhatsApp sx={{ color: "background.default" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "background.default",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                +90 539 133 05 40
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn sx={{ color: "background.default" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "background.default",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Girne, KKTC
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Divider></Divider>
        <Typography
          variant="body1"
          sx={{
            py: 2,
            color: "background.default",
            fontWeight: 300,
            fontSize: 14,
          }}
        >
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
