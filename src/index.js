import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import styled from "styled-components";
import theme from "./utils/theme";
import Loader from "./components/UI/Loading/Loading";
import GlobalStyles from "./utils/global";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  );
});
