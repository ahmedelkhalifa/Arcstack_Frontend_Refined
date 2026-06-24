import { Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ClassicCard from "../general/ClassicCard";
import CardDetails from "./CardDetails";
import { getIcon } from "../utils/getIcon";

const WhatWeBuild = (props) => {
  const service = props.service;
  const items = service.items;
  return (
    <Card
      sx={{
        width: "100%",
        px: 5,
        pt: 3,
        pb: 5,
        bgcolor: "background.paper",
        boxShadow: 10,
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 600, color: "secondary.main", textAlign: "center" }}
      >
        {service.title}
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ alignItems: "center", mt: 2 }}
      >
        <CardDetails
          variant={"row"}
          dark={true}
          icon={items[0].icon}
          number={items[0].title}
          text={items[0].description}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "secondary.light",
            display: { xs: "none", md: "block" },
          }}
        ></Divider>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            borderColor: "secondary.light",
            display: { xs: "block", md: "none" },
          }}
        ></Divider>
        <CardDetails
          variant={"row"}
          dark={true}
          icon={items[1].icon}
          number={items[1].title}
          text={items[1].description}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "secondary.light",
            display: { xs: "none", md: "block" },
          }}
        ></Divider>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            borderColor: "secondary.light",
            display: { xs: "block", md: "none" },
          }}
        ></Divider>
        <CardDetails
          variant={"row"}
          dark={true}
          icon={items[2].icon}
          number={items[2].title}
          text={items[2].description}
        />
      </Stack>
    </Card>
  );
};

export default WhatWeBuild;
