import { Check, East } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const ServiceCard = (props) => {
  const service = props.service;
  console.log(service.feautres);
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        px: 3,
        py: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            boxShadow: 20,
            transform: "translateY(-3px)"
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "120px",
          height: "120px",
          bgcolor: "rgba(14, 98, 91, 0.3)",
          borderTopLeftRadius: "100%",
        }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "primary.main",
          position: "relative",
          width: "fit-content",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: -60,
            transform: "translateY(-50%)",
            height: 3,
            width: 50,
            bgcolor: "secondary.main",
          },
        }}
      >
        {service.number}
      </Typography>
      <Typography variant="h5" sx={{ width: "70%", mt: 1 }}>
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, color: "text.secondary", fontSize: 12, mt: 1, flex: 1 }}
      >
        {service.description}
      </Typography>
      <Box sx={{ mt: 2 }}>
        {service.features.map((feature, index) => (
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center", mt: 1 }}
            key={index}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                border: "1px solid",
                borderColor: "secondary.main",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Check sx={{ color: "secondary.main" }} fontSize="small" />
            </Box>
            <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 500 }}>
              {feature}
            </Typography>
          </Box>
        ))}
        <Button sx={{ p: 0, mt: 3 }} endIcon={<East />}>
          {service.cta}
        </Button>
      </Box>
    </Card>
  );
};

export default ServiceCard;
