import React from "react";
import { AppRouter } from "../router/Router";
import { Provider } from "react-redux";
import { store } from "./store";
import "./globalApp.scss";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
