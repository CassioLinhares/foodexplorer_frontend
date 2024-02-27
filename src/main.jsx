import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from "./hooks/auth";
import { SearchProvider } from "./hooks/search";
import { FavoritesProvider } from "./hooks/favorites";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes/index";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AuthProvider>
      <FavoritesProvider>
      <SearchProvider>

        <Routes />

      </SearchProvider>
      </FavoritesProvider>
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
