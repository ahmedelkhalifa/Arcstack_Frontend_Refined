import { ArrowOutward, Language, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_transparent.png";
import i18next from "i18next";

const Nav = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        bgcolor: "background.default",
        zIndex: 2000,
        transition: "box-shadow 0.3s ease",
        boxShadow: scrolled ? 10 : 0,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component={"img"} src={logo} sx={{ width: "150px" }} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 5, lg: 8 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: props.active === "home" ? "100%" : "0%",
                height: 2,
                bgcolor: "secondary.main",
                transition: "all 0.3s ease",
                // display: props.active === "home" ? "block" : "none"
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            component={"div"}
            onClick={() => navigate("/")}
          >
            {t("navbar.menu.home")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: props.active === "services" ? "100%" : "0%",
                height: 2,
                bgcolor: "secondary.main",
                transition: "all 0.3s ease",
                // display: props.active === "home" ? "block" : "none"
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            component={"div"}
            onClick={() => navigate("/services")}
          >
            {t("navbar.menu.services")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: props.active === "work" ? "100%" : "0%",
                height: 2,
                bgcolor: "secondary.main",
                transition: "all 0.3s ease",
                // display: props.active === "home" ? "block" : "none"
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            component={"div"}
            onClick={() => navigate("/work")}
          >
            {t("navbar.menu.work")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: props.active === "about" ? "100%" : "0%",
                height: 2,
                bgcolor: "secondary.main",
                transition: "all 0.3s ease",
                // display: props.active === "home" ? "block" : "none"
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            component={"div"}
            onClick={() => navigate("/about")}
          >
            {t("navbar.menu.about")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: props.active === "contact" ? "100%" : "0%",
                height: 2,
                bgcolor: "secondary.main",
                transition: "all 0.3s ease",
                // display: props.active === "home" ? "block" : "none"
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            component={"div"}
            onClick={() => navigate("/contact")}
          >
            {t("navbar.menu.contact")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{display: "flex", alignItems: "center"}}>
            <IconButton
              onClick={() =>
                i18next.language === "en"
                  ? i18next.changeLanguage("tr")
                  : i18next.changeLanguage("en")
              }
            >
              <Language sx={{ color: "text.primary" }} />
            </IconButton>
            <Typography variant="body1" sx={{fontWeight: 500}}>
              {i18next.language}
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}
          >
            {t("navbar.cta")}
          </Button>
        </Box>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Menu sx={{ color: "text.primary" }}></Menu>
        </IconButton>
      </Container>
      <Drawer
        anchor="left"
        onClose={() => setOpen(false)}
        open={open}
        sx={{ zIndex: 5000 }}
      >
        <Box sx={{ p: 5 }}>
          <Box component={"img"} src={logo} sx={{ width: "150px" }} />
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              mt: 4,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: props.active === "home" ? "100%" : "0%",
                  height: 2,
                  bgcolor: "secondary.main",
                  transition: "all 0.3s ease",
                  // display: props.active === "home" ? "block" : "none"
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              component={"div"}
              onClick={() => navigate("/")}
            >
              {t("navbar.menu.home")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: props.active === "services" ? "100%" : "0%",
                  height: 2,
                  bgcolor: "secondary.main",
                  transition: "all 0.3s ease",
                  // display: props.active === "home" ? "block" : "none"
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              component={"div"}
              onClick={() => navigate("/services")}
            >
              {t("navbar.menu.services")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: props.active === "work" ? "100%" : "0%",
                  height: 2,
                  bgcolor: "secondary.main",
                  transition: "all 0.3s ease",
                  // display: props.active === "home" ? "block" : "none"
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              component={"div"}
              onClick={() => navigate("/work")}
            >
              {t("navbar.menu.work")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: props.active === "about" ? "100%" : "0%",
                  height: 2,
                  bgcolor: "secondary.main",
                  transition: "all 0.3s ease",
                  // display: props.active === "home" ? "block" : "none"
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              component={"div"}
              onClick={() => navigate("/about")}
            >
              {t("navbar.menu.about")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: props.active === "contact" ? "100%" : "0%",
                  height: 2,
                  bgcolor: "secondary.main",
                  transition: "all 0.3s ease",
                  // display: props.active === "home" ? "block" : "none"
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              component={"div"}
              onClick={() => navigate("/contact")}
            >
              {t("navbar.menu.contact")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              endIcon={<ArrowOutward />}
              sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
            >
              {t("navbar.cta")}
            </Button>
            <IconButton
              onClick={() =>
                i18next.language === "en"
                  ? i18next.changeLanguage("tr")
                  : i18next.changeLanguage("en")
              }
            >
              <Language sx={{ color: "text.primary" }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Nav;
