import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./routers/router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/Theme.context'
import reportWebVitals from './reportWebVitals';
import { ScreenContextProvider } from "./context/Screen.context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScreenContextProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </ScreenContextProvider>
  </React.StrictMode>
);

reportWebVitals();
