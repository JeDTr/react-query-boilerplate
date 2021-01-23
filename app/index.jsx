import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "@hot-loader/react-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query/react";
import { QueryClient } from "react-query/core";

import { AuthProvider } from "@/contexts/AuthContext";
import GlobalStyle from "@/styled/global-style";
import AppRoutes from "@/routes";
import theme from "@/styled/theme";

const client = new QueryClient();

const App = hot(() => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRoutes />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
));

ReactDOM.render(<App />, document.getElementById("app"));
