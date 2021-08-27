import React, { useContext, useEffect, useState } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import AuthContext from "context/AuthContext";
import { useHistory } from "react-router";
import axios from "axios";
import CardProfile from "./CardProfile";
import CardService from "./CardService";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
export default function UserProfile() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const [data, setData] = useState("");

  const getUser = () => {
    const id = sessionStorage.getItem("id");
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
  console.log(data);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto py-50">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Mehdy Services{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="flex flex-wrap">
            <div className="w-full  lg:w-4/12 px-4">
              <div className="relative flex flex-col     rounded-lg -mt-64">
                <CardProfile />
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4 flex flex-wrap">
              <CardService /> <CardService /> <CardService /> <CardService />{" "}
              <CardService /> <CardService />{" "}
            </div>
          </div>
          <div className=" flex w-full justify-center py-4 md:w-12/12 align-middle">
            <Pagination>
              <PaginationItem href="#last" ripple="dark">
                <Icon name="keyboard_arrow_left" />
              </PaginationItem>
              <PaginationItem color="lightBlue" href="#1" ripple="light">
                1
              </PaginationItem>
              <PaginationItem href="#2" ripple="dark">
                2
              </PaginationItem>
              <PaginationItem href="#3" ripple="dark">
                3
              </PaginationItem>
              <PaginationItem href="#4" ripple="dark">
                4
              </PaginationItem>
              <PaginationItem href="#5" ripple="dark">
                5
              </PaginationItem>
              <PaginationItem href="#last" ripple="dark">
                <Icon name="keyboard_arrow_right" />
              </PaginationItem>
            </Pagination>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
