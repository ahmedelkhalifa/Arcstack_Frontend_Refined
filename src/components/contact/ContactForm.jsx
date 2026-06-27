import {
  ArrowForward,
  ArrowOutward,
  BusinessOutlined,
  EditOutlined,
  EmailOutlined,
  HandymanOutlined,
  Instagram,
  Language,
  Lock,
  PersonOutlined,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactForm = () => {
  const { t } = useTranslation("contactPage");
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const businessRef = useRef();
  const [service, setService] = useState();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          company: businessRef.current.value,
          service: service,
          message: messageRef.current.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      divider={
        <Divider
          flexItem
          sx={{
            borderBottomWidth: { xs: 2, md: 0 },
            borderRightWidth: { xs: 0, md: 2 },
          }}
        />
      }
      sx={{
        alignItems: "flex-start",
        bgcolor: "background.paper",
        boxShadow: 10,
        borderRadius: 1,
      }}
    >
      <Box sx={{ flex: 1, p: 4 }} component={"form"} onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          {t("contactForm.badge")}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          {t("contactForm.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 14, fontWeight: 500, mt: 1 }}
        >
          {t("contactForm.description")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            gap: 2,
            mt: 3,
            width: "100%",
          }}
        >
          <TextField
            placeholder={t("contactForm.fields.name.placeholder")}
            label={t("contactForm.fields.name.label")}
            fullWidth
            inputRef={nameRef}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            placeholder={t("contactForm.fields.email.placeholder")}
            label={t("contactForm.fields.email.label")}
            fullWidth
            type={"email"}
            error={emailError}
            helperText={emailError ? t("validation.email") : ""}
            onBlur={() => setEmailError(!validateEmail(emailRef.current.value))}
            inputRef={emailRef}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <TextField
          placeholder={t("contactForm.fields.company.placeholder")}
          label={t("contactForm.fields.company.label")}
          sx={{ width: "100%", mt: 3 }}
          inputRef={businessRef}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessOutlined />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          select
          fullWidth
          label={t("contactForm.fields.service.label")}
          defaultValue=""
          sx={{ mt: 3 }}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <MenuItem value="" disabled>
            {t("contactForm.fields.service.placeholder")}
          </MenuItem>

          {t("contactForm.fields.service.options", {
            returnObjects: true,
          }).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          placeholder={t("contactForm.fields.message.placeholder")}
          label={t("contactForm.fields.message.label")}
          multiline
          minRows={5}
          inputRef={messageRef}
          sx={{ width: "100%", mt: 3 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    alignSelf: "flex-start",
                  }}
                >
                  <EditOutlined />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="contained"
          endIcon={<ArrowOutward />}
          sx={{ mt: 3 }}
          type="submit"
        >
          {t("contactForm.submitButton")}
        </Button>
        <Box sx={{ mt: 1, display: "flex", gap: 2, alignItems: "center" }}>
          <Lock />
          <Typography variant="body1" sx={{ fontSize: 12, fontWeight: 500 }}>
            {t("contactForm.privacyNote")}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 4, width: "100%" }}>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          {t("contactInfo.badge")}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          {t("contactInfo.title")}
        </Typography>
        <Box sx={{ mb: 5 }} />
        <ContactCard
          icon={
            <Language fontSize="large" sx={{ color: "background.default" }} />
          }
          title={t("contactInfo.items.website.title")}
          value={t("contactInfo.items.website.value")}
          link={t("contactInfo.items.website.link")}
        />
        <Box sx={{ mb: 1 }} />
        <ContactCard
          icon={
            <WhatsApp fontSize="large" sx={{ color: "background.default" }} />
          }
          title={t("contactInfo.items.whatsApp.title")}
          value={t("contactInfo.items.whatsApp.value")}
          link={t("contactInfo.items.whatsApp.link")}
        />
        <Box sx={{ mb: 1 }} />
        <ContactCard
          icon={
            <Instagram fontSize="large" sx={{ color: "background.default" }} />
          }
          title={t("contactInfo.items.instagram.title")}
          value={t("contactInfo.items.instagram.value")}
          link={t("contactInfo.items.instagram.link")}
        />
        <Box sx={{ mb: 1 }} />
        <ContactCard
          icon={
            <EmailOutlined
              fontSize="large"
              sx={{ color: "background.default" }}
            />
          }
          title={t("contactInfo.items.email.title")}
          value={t("contactInfo.items.email.value")}
          link={t("contactInfo.items.email.link")}
        />
      </Box>
    </Stack>
  );
};

export default ContactForm;
