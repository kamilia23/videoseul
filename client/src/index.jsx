
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
);

/**
 * <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
 ReactDOM.render(
  
  document.getElementById("root")
);


 
 */
