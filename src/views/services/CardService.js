import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";

import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

// components

export default function CardService() {
  const buttonRef = useRef();

  return (
    <>
      <div className="w-full md:w-4/12 px-4 py-10 mr-auto ml-auto">
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
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="Avatar"
                    className="  shadow-lg rounded-full mr-2  max-w-30-px"
                  ></img>
                  <div className="flex flex-col">
                    <p className="text-xxs font-bold" color="gray">
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
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised .
              </p>
            </div>
          </CardBody>

          <CardFooter className="flex justify-between">
            <Button color="lightBlue" ref={buttonRef} ripple="light">
              Save
              <FontAwesomeIcon icon="heart" />
            </Button>

            <Tooltips placement="top" ref={buttonRef}>
              <TooltipsContent>Save to list</TooltipsContent>
            </Tooltips>
            <div className="flex justify-content">
              <FontAwesomeIcon icon="star" className="star-yellow mx-3 " />
              <p className="font-bold  ">5.0</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
