import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Box sx={{ flex: 1, paddingTop: "80px" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
