import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CouncilMembers from "./Pages/Council Members/CouncilMembers.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/"></Route>
          <Route path="/council-members" element={<CouncilMembers />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
