import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = ({ title }: { title: string }) => (
  <AppBar position="relative" sx={{ height: 60 }} enableColorOnDark>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
