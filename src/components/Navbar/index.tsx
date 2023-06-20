import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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
