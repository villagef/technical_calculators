import { FunctionComponent, ReactNode } from "react";
import { Container, CssBaseline, GlobalStyles } from "@mui/material";
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
        <Container maxWidth="xl" component="main" className="layout-container">
          {children}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
