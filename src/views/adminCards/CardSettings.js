import axios from "axios";
import React, { useEffect, useState } from "react";

// components

export default function CardSettings() {
  const [newService, setnewService] = useState({
    title: "",
    price: "",
    description: "",
    categorie: "",

    photo: "",
  });

  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch("http://localhost:5000/service/categories");
      const categorieData = await response.json();
      setCategorie(categorieData);
    };
    fetchCat();
  }, []);
  console.log(categorie);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newService.title);
    console.log(formData.values);
    // formData.append("price", newService.price);

    // formData.append("description", newService.description);
    // formData.append("categorie", newService.categorie);

    formData.append("photo", newService.photo);

    axios
      .post("http://localhost:5000/service/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setnewService({ [e.target.title]: e.target.value });
  };

  const handlePhoto = (e) => {
    setnewService({ ...newService, photo: e.target.files[0] });
  };
  const categories = [
    { value: "Logo design ", label: "Logo design " },
    { value: "Wordpress", label: "Wordpress" },
    { value: "Full Stack ", label: "Full Stack " },
    { value: "Reseau  ", label: "Reseau  " },
  ];

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add service</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Add
            </button>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Service Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Title
                  </label>

                  <input
                    value={newService.title}
                    name="title"
                    onChange={handleChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price{" "}
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="DT"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Description{" "}
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Describe your job"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-4 ">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="avatar"
              >
                Choose a service picture:
              </label>

              <input
                className="mt-3"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
              ></input>
            </div>

            <div className="flex flex-col px-4  mt-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-3"
                for="avatar"
              >
                Categorie
              </label>
              <select
                className="mt-3 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="categorie"
              >
                {categorie.map((cat) => {
                  return (
                    <>
                      {" "}
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    </>
                  );
                })}
              </select>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
