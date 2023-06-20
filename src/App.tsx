import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Technical Calculators
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="calculator1"
              sx={{ my: 1, mx: 1.5 }}
            >
              Calculator 1
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="calculator2"
              sx={{ my: 1, mx: 1.5 }}
            >
              Calculator 2
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="calculator3"
              sx={{ my: 1, mx: 1.5 }}
            >
              Calculator 3
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
