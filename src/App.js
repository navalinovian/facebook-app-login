import React from "react";
import Routes from "./routes/routes";
import AppProvider from "./context/AppProvider";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
