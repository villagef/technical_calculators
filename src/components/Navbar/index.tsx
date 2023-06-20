import { useLocation, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
import "./style.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Technical Calculators
        </Typography>
        <Tabs value={location.pathname}>
          <Tab
            label="Calculator 1"
            value="/calculator1"
            to="/calculator1"
            component={Link}
            className="tab-component"
          />
          <Tab
            label="Calculator 2"
            value="/calculator2"
            to="/calculator2"
            component={Link}
            className="tab-component"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
