import { Check, VerifiedUserOutlined } from "@mui/icons-material";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const WhatsIncluded = (props) => {
  const content = props.content;
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        px: 5,
        py: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: {xs: 3, md: 0}
      }}
    >
      <Box sx={{ flex: 2 }}>
        <Typography
          variant="body1"
          sx={{ color: "secondary.light", fontWeight: 700 }}
        >
          {content.included.title}
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={1} sx={{mt: 3}}>
          {content.included.features.map((feature, index) => (
            <Grid size={{xs: 12, md: 6}}>
              <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid",
                    borderColor: "text.primary",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Check sx={{fontSize: "12px"}}/>
                </Box>
                <Typography variant="body1" sx={{fontSize: {xs: 12, md: 14}, fontWeight: 500, flex: 1}}>
                    {feature.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "secondary.light", display: {xs: "none", md: "block"} }}
      ></Divider>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ borderColor: "secondary.light", display: {xs: "block", md: "none"} }}
      ></Divider>
      <Box sx={{ flex: 1, display: "flex", alignItems: "flex-start", gap: 2, px: {xs: 0, md: 5}}}>
          <VerifiedUserOutlined  sx={{fontSize: "70px"}}/>
          <Box>
            <Typography variant="h6">
                {content.highlightCard.title}
            </Typography>
            <Typography variant="body1" sx={{fontSize: {xs: 12, md: 14}}}>
                {content.highlightCard.description}
            </Typography>
          </Box>
      </Box>
    </Card>
  );
};

export default WhatsIncluded;
