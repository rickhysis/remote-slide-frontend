import React, { useEffect } from "react";
import { AppProvider } from './AppContext'
import Home from "./containers/Home";

function App() {
  return (
    <AppProvider >
      <Home />
    </AppProvider>
  );
}

export default App;
