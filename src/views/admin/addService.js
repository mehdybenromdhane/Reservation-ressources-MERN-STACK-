import React from "react";

// components

import CardSettings from "../adminCards/CardSettings";
import CardProfile from "components/Cards/CardProfile.js";
import CardList from "views/adminCards/CardList";
export default function AddService() {
  return (
    <>
      <div className="flex flex-wrap">
        <CardSettings />
      </div>
      <div className="flex flex-wrap justify-between">
        <CardList />
        <CardList />
        <CardList /> <CardList />
        <CardList />
        <CardList />
      </div>
    </>
  );
}
