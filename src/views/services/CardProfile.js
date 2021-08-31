import React, { useRef, useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Label from "@material-tailwind/react/Label";
import { Link } from "react-router-dom";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@material-tailwind/react/Checkbox";

// components

export default function CardProfile() {
  const [showModal, setShowModal] = useState(false);

  const buttonRef = useRef();

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 py-3 flex justify-start">
              <Button
                color="lightBlue"
                buttonType="filled"
                size="sm"
                rounded={true}
                iconOnly={true}
                ripple="light"
              >
                <Icon name="favorite" size="sm" />
              </Button>
            </div>
            <div className="w-full flex px-4 mb-4 justify-end">
              <Label color="green">Online</Label>
            </div>

            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>

                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Button
              color="lightBlue"
              buttonType="filled"
              size="lg"
              rounded={false}
              block={true}
              iconOnly={false}
              ripple="dark"
            >
              Contact me{" "}
            </Button>
            <Link to="/calendar">
              <Button
                className="mt-2"
                color="lightBlue"
                buttonType="outline"
                size="lg"
                rounded={false}
                block={true}
                iconOnly={false}
                ripple="dark"
              >
                See calendar
              </Button>
            </Link>
            <Button
              className="mt-2"
              color="lightBlue"
              buttonType="filled"
              size="lg"
              onClick={(e) => setShowModal(true)}
              rounded={false}
              block={true}
              iconOnly={false}
              ripple="dark"
            >
              Resume{" "}
            </Button>
            <Modal
              size="lg"
              active={showModal}
              toggler={() => setShowModal(false)}
            >
              <ModalHeader toggler={() => setShowModal(false)}>
                Dossier de candidature{" "}
              </ModalHeader>
              <ModalBody>
                <h1 className="text-base leading-relaxed font-semibold">
                  Civilité <FontAwesomeIcon icon="user" className=" " />
                </h1>
                <div className="mt-5  border-t border-blueGray-200 text-left"></div>
                <p>nom : </p>
                <p>prenom : </p>
                <p>Email : </p>
                <p>Nationalité : </p>
                <p>
                  Nationalité :
                  NationalitéNationalitéNationalitéNationalitéNationalitéNationalité{" "}
                </p>

                <h1 className="text-base mt-5 leading-relaxed font-semibold">
                  Diplome/ Formation Langues
                  <FontAwesomeIcon icon="certificate" className=" " />
                </h1>
                <div className="mt-5  border-t border-blueGray-200 text-left"></div>
                <p className="mt-2">Dernière(s) diplômes(s) : </p>
                <div class="w-2/3 mx-auto">
                  <div class="bg-white  rounded my-6">
                    <table className="text-left  w-full ">
                      {" "}
                      <thead className="bg-teal-500 border">
                        <tr>
                          <th class="  text-white py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Année{" "}
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Diplome
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border">
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            2020-2021{" "}
                          </td>
                          <td class="py-4 px-6 border">
                            ojfeofjeojfopejfopjeofjeofejpo
                          </td>
                        </tr>
                        <tr class="hover:bg-grey-lighter ">
                          <td class="py-4 px-6 border bg-teal-200 ">
                            2021-2022{" "}
                          </td>
                          <td class="py-4 px-6 border "></td>
                        </tr>

                        <tr class="hover:bg-grey-lighter">
                          <td class="py-4 px-6 border bg-teal-200">
                            Mexico City
                          </td>
                          <td className="py-4 px-10 border"></td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="mt-2">Différents(s) langues(s) : </p>
                    <div className="w-2/3 mx-auto">
                      <div className="bg-white shadow-md rounded my-6">
                        <table className="text-left  w-full ">
                          {" "}
                          <thead className="bg-teal-500 border">
                            <tr>
                              <th class="  text-white py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                Langue{" "}
                              </th>
                              <th class="text-white py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                Niveau
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border">
                            <tr class="hover:bg-grey-lighter border ">
                              <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                                Arabe
                              </td>
                              <td class="py-4 px-6 border">
                                ojfeofjeojfopejfopjeofjeofejpo
                              </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter ">
                              <td class="py-4 px-6 border bg-teal-200 ">
                                Française{" "}
                              </td>
                              <td class="py-4 px-6 border "></td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                              <td class="py-4 px-6 border bg-teal-200">
                                Anglais{" "}
                              </td>
                              <td className="py-4 px-10 border"></td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                              <td class="py-4 px-6 border bg-teal-200">
                                Espagnole{" "}
                              </td>
                              <td className="py-4 px-10 border"></td>
                            </tr>{" "}
                            <tr class="hover:bg-grey-lighter">
                              <td class="py-4 px-6 border bg-teal-200">
                                Allemand{" "}
                              </td>
                              <td className="py-4 px-10 border"></td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                              <td class="py-4 px-6 border bg-teal-200">
                                Italien{" "}
                              </td>
                              <td className="py-4 px-10 border"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h1 className="text-base mt-5 leading-relaxed font-semibold">
                      Compétences / Environnement technique{" "}
                      <FontAwesomeIcon icon="code" className=" " />
                    </h1>
                    <div className="mt-5  border-t border-blueGray-200 text-left"></div>
                  </div>
                </div>
                <div className="w-2/3 mx-auto">
                  <div className="bg-white shadow-md rounded my-6">
                    <table className="text-left  w-full ">
                      {" "}
                      <thead className="bg-teal-500 border">
                        <tr>
                          <th class="  text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Niveau{" "}
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Angular
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            React
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Node js
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Spring Boot
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Javascript
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border">
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Débutant
                          </td>
                          <td class="py-4 px-6 border"> </td>
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>{" "}
                          <td class="py-4 px-6 border"></td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Confirmé
                          </td>
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>{" "}
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Expert
                          </td>
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-2/3 mx-auto">
                  <div className="bg-white shadow-md rounded my-6">
                    <table className="text-left  w-full ">
                      {" "}
                      <thead className="bg-teal-500 border">
                        <tr>
                          <th class="  text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Niveau{" "}
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            PHP
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Symfony
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            Java{" "}
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            CSS{" "}
                          </th>
                          <th class="text-white py-4 px-6 bg-grey-lightest font-semibold uppercase text-sm text-grey-dark border-b border-grey-light">
                            HTMl
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border">
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Débutant
                          </td>
                          <td class="py-4 px-6 border"> </td>
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>{" "}
                          <td class="py-4 px-6 border"></td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Confirmé
                          </td>
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>{" "}
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                        <tr class="hover:bg-grey-lighter border ">
                          <td class="py-4 px-6 border-lightBlue-700 bg-teal-200">
                            Expert
                          </td>
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border"></td>{" "}
                          <td class="py-4 px-6 border">
                            {" "}
                            <Checkbox color="cyan" id="checkbox" checked />
                          </td>
                          <td class="py-4 px-6 border"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xl font-semibold text-center leading-normal text-blueGray-700 ">
            Skills{" "}
          </p>
          <div className="mt-4 py-4 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap  justify-center">
              <div className="flex flex-wrap justify-center">
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
                <Label color="lightBlue">Label</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
