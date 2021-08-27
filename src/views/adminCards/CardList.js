import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

import Button from "@material-tailwind/react/Button";

// components

export default function CardList() {
  const [showModal, setShowModal] = useState(false);

  const buttonRef = useRef();
  return (
    <>
      <div class=" bg-gray-100 flex justify-center py-2 items-center">
        <div class="container flex justify-center">
          <div class="max-w-sm py-32">
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                alt=""
              />
              <div class="py-6 px-8 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  Job title{" "}
                </h1>
                <p class="text-gray-700 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                  labore. Ea debitis beatae sequi deleniti.
                </p>
                <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Edit{" "}
                </button>
                <button
                  onClick={(e) => setShowModal(true)}
                  class="mt-6 py-2 px-4 mx-4 bg-red-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  Delete <FontAwesomeIcon icon="trash" />
                </button>
                <Modal
                  size="sm"
                  active={showModal}
                  toggler={() => setShowModal(false)}
                >
                  <ModalHeader toggler={() => setShowModal(false)}>
                    Delete service
                  </ModalHeader>
                  <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                      Are you sure you want to delete this work?
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
                      color="red"
                      onClick={(e) => setShowModal(false)}
                      ripple="light"
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">150 DT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
