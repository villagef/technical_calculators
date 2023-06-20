import { FunctionComponent, ReactNode } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import Navbar from "../Navbar";

interface ChildrenProps {
  children: ReactNode;
}
const defaultTheme = createTheme();

const Layout: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <div className="layout">
        <Navbar />
        <div className="layout-main">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
