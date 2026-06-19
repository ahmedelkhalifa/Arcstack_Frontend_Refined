import { ArrowOutward, Language, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_transparent.png";
import i18next from "i18next";

const Nav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
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
            gap: {md: 5, lg: 8},
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
            component={"div"}
            onClick={() => navigate("/")}
          >
            {t("navbar.menu.home")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
            component={"div"}
            onClick={() => navigate("/services")}
          >
            {t("navbar.menu.services")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
            component={"div"}
            onClick={() => navigate("/work")}
          >
            {t("navbar.menu.work")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
            component={"div"}
            onClick={() => navigate("/about")}
          >
            {t("navbar.menu.about")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
            component={"div"}
            onClick={() => navigate("/contact")}
          >
            {t("navbar.menu.contact")}
          </Typography>
        </Box>
        <Box sx={{ display: {xs: "none", md: "flex"}, alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              endIcon={<ArrowOutward />}
              sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}
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
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Menu sx={{ color: "text.primary" }}></Menu>
        </IconButton>
      </Container>
      <Drawer anchor="left" onClose={() => setOpen(false)} open={open}>
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
              sx={{ fontWeight: 600, cursor: "pointer" }}
              component={"div"}
              onClick={() => navigate("/")}
            >
              {t("navbar.menu.home")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, cursor: "pointer" }}
              component={"div"}
              onClick={() => navigate("/services")}
            >
              {t("navbar.menu.services")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, cursor: "pointer" }}
              component={"div"}
              onClick={() => navigate("/work")}
            >
              {t("navbar.menu.work")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, cursor: "pointer" }}
              component={"div"}
              onClick={() => navigate("/about")}
            >
              {t("navbar.menu.about")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, cursor: "pointer" }}
              component={"div"}
              onClick={() => navigate("/contact")}
            >
              {t("navbar.menu.contact")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4, }}>
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
