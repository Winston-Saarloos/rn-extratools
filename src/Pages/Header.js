import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{Logo}</Toolbar>;
  };

  const Logo = (
    <Typography variant="h6" component="h1">
        RN-ExtraTools
    </Typography>
  );
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}