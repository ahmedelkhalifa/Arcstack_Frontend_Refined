import { Box } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <Box>
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav />
        <Hero />
      </Box>
    </Box>
  );
};

export default Home;
