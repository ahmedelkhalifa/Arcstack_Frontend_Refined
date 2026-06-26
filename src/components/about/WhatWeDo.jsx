import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ClassicCard from "../general/ClassicCard";
import { Tab } from "@mui/icons-material";
import CardVariant from "./CardVariant";
import { getIcon } from "./../utils/getIcon";

const WhatWeDo = () => {
  const { t } = useTranslation("aboutPage");
  const items = t("services.items", { returnObjects: true });
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          textAlign: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -10,
            height: 2,
            width: "50px",
            bgcolor: "text.primary",
            transform: "translateX(-50%)",
          },
        }}
      >
        {t("services.title")}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        {items.map((item, index) => {
          const Icon = getIcon(item.icon);

          return (
            <>
              <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                <CardVariant
                  icon={<Icon fontSize="large" />}
                  number={item.title}
                  text={item.description}
                  dark={true}
                  variant="column"
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default WhatWeDo;
