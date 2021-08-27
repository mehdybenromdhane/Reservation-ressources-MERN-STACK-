import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import AuthContext from "context/AuthContext";
import { useHistory } from "react-router";
import axios from "axios";

import CardImage from "@material-tailwind/react/CardImage";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Scrollbars from "react-custom-scrollbars";

import "assets/styles/card.css";

export default function ServiceDetails() {
  const buttonRef = useRef();

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const [data, setData] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);

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
                  <h1 className="text-white font-semibold text-5xl">Details</h1>
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
        <div className="flex">
          <section className="relative  w-1/2 py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-left mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      <CardImage
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        alt="Card Image"
                      />{" "}
                    </h3>
                    <div className="text-sm leading-normal mt-8 mb-2 text-blueGray-400  ">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        About this work{" "}
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        1,000+ Projects completed, 7000+ Happy buyers around the
                        world, 5000+ Positive Reviews, 100+ Industries. I am
                        professional and reputed logo design service provider,
                        offering 100% original and conceptual logo design
                        solutions for businesses of varying sizes. The logos
                        will be the true representative of your business and
                        match its nature and standard. I have been designing for
                        various clients worldwide for the past 8 years. I have
                        worked with several internationally acclaimed,
                        prestigious and well known companies and organization. I
                        have the ability to look from the client’s eye and
                        understand their needs and provide my clients with
                        designs that help achieve their company/brand full
                        potential. Feature in Business Insider as a fiverr
                        seller shorturl.at/uEPU3 Live Portfolio:
                        http://flic.kr/s/aHsmGFyjY6 Unlimited Revisions. Color &
                        Background Variations. 100% Original initial concepts.
                        Delivery on Time. 100% Editable and Resizable Vector.
                        Message for Consultation. Arlie
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-left">
                    <div className="flex  ">
                      <div className="lg:w-9/12 w-1/2 px-4">
                        <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                          The seller{" "}
                        </h3>
                        <aside class="profile-card">
                          <header>
                            <a target="_blank" href="#">
                              <img
                                src={
                                  require("assets/img/team-1-800x800.jpg")
                                    .default
                                }
                                class="hoverZoomLink"
                              />
                            </a>

                            <h1>John Doe</h1>

                            <h2>Better Visuals</h2>
                          </header>

                          <div class="profile-bio">
                            <p>
                              It takes monumental improvement for us to change
                              how we live our lives. Design is the way we access
                              that improvement.
                            </p>
                          </div>
                        </aside>
                      </div>
                      <div className="w-1/2 py-16 ">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                        >
                          Contact Seller{" "}
                        </Button>
                        <Button
                          className="mt-4"
                          color="lightBlue"
                          buttonType="outline"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="dark"
                        >
                          See Profile{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative  w-1/2 py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Recommended for you{" "}
                    </h3>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        {" "}
                        <Scrollbars
                          autoHide
                          style={{ width: 500, height: 600 }}
                        >
                          <Card>
                            <Link to="/details">
                              <CardImage
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                alt="Card Image"
                              />
                            </Link>

                            <CardBody>
                              <div className="flex justify-between mt-auto">
                                <H6 color="gray">50 DT</H6>
                                <Link to="/userProfile">
                                  <div className="flex justify-content ">
                                    <img
                                      src={
                                        require("assets/img/team-1-800x800.jpg")
                                          .default
                                      }
                                      alt="Avatar"
                                      className="  shadow-lg rounded-full mr-2  max-w-30-px"
                                    ></img>
                                    <div className="flex flex-col">
                                      <p
                                        className="text-xxs font-bold"
                                        color="gray"
                                      >
                                        Mehdy ben romdhane
                                      </p>
                                      <p className="text-xxs " color="gray">
                                        level 2
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              <div className="pt-4 ">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                  An artist of considerable range, Jenna the
                                  name taken by Melbourne-raised .
                                </p>
                              </div>
                            </CardBody>

                            <CardFooter className="flex justify-between">
                              <Button
                                color="lightBlue"
                                ref={buttonRef}
                                ripple="light"
                              >
                                Save
                                <FontAwesomeIcon icon="heart" />
                              </Button>

                              <Tooltips placement="top" ref={buttonRef}>
                                <TooltipsContent>Save to list</TooltipsContent>
                              </Tooltips>
                              <div className="flex justify-content">
                                <FontAwesomeIcon
                                  icon="star"
                                  className="star-yellow mx-3 "
                                />
                                <p className="font-bold  ">5.0</p>
                              </div>
                            </CardFooter>
                          </Card>
                          <Card>
                            <Link to="/details">
                              <CardImage
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                alt="Card Image"
                              />
                            </Link>

                            <CardBody>
                              <div className="flex justify-between mt-auto">
                                <H6 color="gray">50 DT</H6>
                                <Link to="/userProfile">
                                  <div className="flex justify-content ">
                                    <img
                                      src={
                                        require("assets/img/team-1-800x800.jpg")
                                          .default
                                      }
                                      alt="Avatar"
                                      className="  shadow-lg rounded-full mr-2  max-w-30-px"
                                    ></img>
                                    <div className="flex flex-col">
                                      <p
                                        className="text-xxs font-bold"
                                        color="gray"
                                      >
                                        Mehdy ben romdhane
                                      </p>
                                      <p className="text-xxs " color="gray">
                                        level 2
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              <div className="pt-4 ">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                  An artist of considerable range, Jenna the
                                  name taken by Melbourne-raised .
                                </p>
                              </div>
                            </CardBody>

                            <CardFooter className="flex justify-between">
                              <Button
                                color="lightBlue"
                                ref={buttonRef}
                                ripple="light"
                              >
                                Save
                                <FontAwesomeIcon icon="heart" />
                              </Button>

                              <Tooltips placement="top" ref={buttonRef}>
                                <TooltipsContent>Save to list</TooltipsContent>
                              </Tooltips>
                              <div className="flex justify-content">
                                <FontAwesomeIcon
                                  icon="star"
                                  className="star-yellow mx-3 "
                                />
                                <p className="font-bold  ">5.0</p>
                              </div>
                            </CardFooter>
                          </Card>
                        </Scrollbars>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Comments
                    </h3>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
