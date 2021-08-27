import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Label from "@material-tailwind/react/Label";
import { Link } from "react-router-dom";

// components

export default function CardProfile() {
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
