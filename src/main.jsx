import React from "react";
import ReactDOM from "react-dom/client";
// import { Details } from "./pages/Details";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyled from "./styles/global";
import { Home } from "./pages/Home";
import { SignIn } from "./components/Signin";
import { SignUp } from "./components/SignUp";
import { Profile } from "./pages/Profile";
import { New } from "./pages/New";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Profile />
      <New />
      <SignUp />
      <SignIn />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
