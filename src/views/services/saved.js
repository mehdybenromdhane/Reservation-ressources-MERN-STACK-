import React, { useRef, useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Navbar from "components/Navbars/AuthNavbar.js";
import "assets/styles/profile.scss";
import Carousel from "react-elastic-carousel";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function Saved() {
  const [showModal, setShowModal] = useState(false);

  const buttonRef = useRef();

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
                    My saved list
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

        <section className="relative py-40 bg-blueGray-200">
          <div className="container max-w-full mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          Saved profiles
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-0 py-10 border-t border-blueGray-200 text-center">
                  <Carousel itemsToShow={3} className={"slider"}>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="card-wrapper">
                        <div class="card">
                          <div class="card-image">
                            <img
                              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                              alt="profile one"
                            />
                          </div>

                          <ul class="social-icons">
                            <li>
                              <a href="">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>

                          <div class="details">
                            <h2>
                              John Smith
                              <span class="job-title">UI Developer</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-40 bg-blueGray-200">
          <div className="container max-w-full mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          Saved Services
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-0 py-10 border-t border-blueGray-200 text-center">
                  <div className="w-full   flex flex-wrap ">
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto flex justify-center">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
                          </div>
                        </CardBody>

                        <CardFooter className="flex justify-between">
                          <Button
                            color="lightBlue"
                            type="button"
                            onClick={(e) => setShowModal(true)}
                            ripple="light"
                          >
                            Unsave{" "}
                          </Button>

                          <Modal
                            size="sm"
                            active={showModal}
                            toggler={() => setShowModal(false)}
                          >
                            <ModalHeader toggler={() => setShowModal(false)}>
                              Unsave service
                            </ModalHeader>
                            <ModalBody>
                              <p className="text-base leading-relaxed text-gray-600 font-normal">
                                Are you sure you want to unsave this work?
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="red"
                                buttonType="link"
                                onClick={(e) => setShowModal(false)}
                                ripple="dark"
                              >
                                Close
                              </Button>

                              <Button
                                color="green"
                                onClick={(e) => setShowModal(false)}
                                ripple="light"
                              >
                                Unsave
                              </Button>
                            </ModalFooter>
                          </Modal>
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
                    </div>
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
                          </div>
                        </CardBody>

                        <CardFooter className="flex justify-between">
                          <Button
                            color="lightBlue"
                            ref={buttonRef}
                            ripple="light"
                          >
                            unsave
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
                    </div>{" "}
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
                          </div>
                        </CardBody>

                        <CardFooter className="flex justify-between">
                          <Button
                            color="lightBlue"
                            ref={buttonRef}
                            ripple="light"
                          >
                            unsave
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
                    </div>{" "}
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
                          </div>
                        </CardBody>

                        <CardFooter className="flex justify-between">
                          <Button
                            color="lightBlue"
                            ref={buttonRef}
                            ripple="light"
                          >
                            unsave
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
                    </div>{" "}
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
                          </div>
                        </CardBody>

                        <CardFooter className="flex justify-between">
                          <Button
                            color="lightBlue"
                            ref={buttonRef}
                            ripple="light"
                          >
                            unsave
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
                    </div>{" "}
                    <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
                      <Card>
                        <CardImage
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                          alt="Card Image"
                        />

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
                            <Paragraph color="gray">
                              Don't be scared of the truth because we need to
                              restart need to restart need to restart
                            </Paragraph>
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
                    </div>
                  </div>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
