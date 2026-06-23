import { ArrowOutward, Check, East } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceHorizontal = (props) => {
  const navigate = useNavigate();
  const items = props.items;
  return (
    <Box sx={{ width: "100%", bgcolor: "background.default", borderRadius: 1 }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: {
            xs: "column",
            md: props.variant === "reverse" ? "row-reverse" : "row",
          },
        }}
      >
        <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
          <Box
            component={"img"}
            src={props.image}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            {props.number}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              fontSize: 14,
              mt: 2,
              width: "70%",
            }}
          >
            {props.description}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 14, fontWeight: 600, mt: 3 }}
          >
            {props.subtitle}
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ mt: 1, width: { md: "85%", lg: "70%" } }}
          >
            {items.map((item, index) => (
              <Grid size={6} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid",
                      borderColor: "text.secondary",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <Check sx={{ color: "text.secondary", fontSize: "10px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: 12,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button sx={{ p: 0, mt: 3 }} endIcon={<East />} onClick={() => navigate(`/services/${props.slug}`)}>
            {props.cta}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceHorizontal;
