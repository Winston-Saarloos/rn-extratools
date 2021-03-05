import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header({title}) {
  const displayDesktop = () => {
    return <Toolbar>{Logo}</Toolbar>;
  };

  const Logo = (
    <Typography variant="h6" component="h1">
      {title}
    </Typography>
  );

  return (
    <header>
      <AppBar>
        {displayDesktop()}
      </AppBar>
    </header>
  );
}