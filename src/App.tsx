import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./pages/routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
