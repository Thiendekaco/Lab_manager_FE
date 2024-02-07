import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./routers/router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/Theme.context'
import reportWebVitals from './reportWebVitals';
import { PersistGate } from "redux-persist/integration/react";
import { ScreenContextProvider } from "./context/Screen.context";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ScreenContextProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </ScreenContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
