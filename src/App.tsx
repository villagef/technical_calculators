import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./pages/routes";

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
