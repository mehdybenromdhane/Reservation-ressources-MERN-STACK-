import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/landingPage";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import AuthContext from "../src/context/AuthContext";
import axios from "axios";
import Categorie from "views/services/categorie";
import UserProfile from "views/services/userProfile";
import Calendar from "views/Calendar/calendar";
import Saved from "views/services/saved";
import ServiceDetails from "views/services/serviceDetails";
function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [data, setData] = useState("");
  const getUser = () => {
    const id = localStorage.getItem("id");
    axios
      .get("http://localhost:5000/auth/user/" + id)
      .then((response) => {
        const user = response.data;
        setData(user);
      })
      .catch((error) => console.error(`Error:${error}`));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(JSON.stringify(data.role));

  return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/categorie" exact component={Categorie} />
        <Route path="/userProfile" exact component={UserProfile} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/saved" exact component={Saved} />
        <Route path="/details" exact component={ServiceDetails} />
        <Route path="/landingPage" exact component={Landing} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
