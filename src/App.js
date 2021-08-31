import React from "react";
import Router from "./Router";
import axios from "axios";
import Modal from "react-modal";
import ChatBot from "react-simple-chatbot";

import { AuthContextProvider } from "./context/AuthContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faStar,
  faHeart,
  faPlus,
  faRemoveFormat,
  faMinus,
  faTrash,
  faUser,
  faCertificate,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
axios.defaults.withCredentials = true;
Modal.setAppElement("#root");
function App() {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faStar,
    faHeart,
    faPlus,
    faRemoveFormat,
    faMinus,
    faTrash,
    faUser,
    faCertificate,
    faUserGraduate,
    faCode
  );
  const config = {
    width: "350px",
    height: "450px",
    floating: true,
  };
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#0ea5e9",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#0ea5e9",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#0ea5e9",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          theme={theme}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
