
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../sidePannel.css";
import FormInput from "./FormInput";
import { countryDetails } from "../store/country";

function Navbar(props) {
  const [toogle, setToogle] = useState(false);
  const darkMode = useSelector((state) => state.country.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        !document.querySelector(".navbar-brand").contains(e.target) &&
        !document.querySelector("#mySidepanel").contains(e.target)
      ) {
        toggleNav(0, false);
      }
    });
  }, []);

  function toggleNav(val, toggleVal) {
    document.getElementById("mySidepanel").style.width = val;
    setToogle(toggleVal);
  }

  return (
    <div>
      <div
        id="mySidepanel"
        className={`sidepanel mt-5 ${toogle ? "px-3" : ""} ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => toggleNav(0, false)}
        >
          &times;
        </a>
        <div>
          <FormInput />
          <div className="d-flex justify-content-between align-itmes-center mt-4">
            <h4 className={`${darkMode ? "text-white" : "text-dark"}`}>
              Dark Mode :{" "}
            </h4>
            <div className="form-check form-switch my-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={darkMode}
                onClick={(e) =>
                  dispatch(countryDetails.setDarkMode(e.target.checked))
                }
              />
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "Skyblue" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand openbtn"
            href="#"
            onClick={() =>
              toogle ? toggleNav(0, false) : toggleNav("300px", true)
            }
          >
            MapUI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0 text-black ms-auto">
              <li className="nav-item me-3">Profile</li>

              <li className="nav-item me-3">Register</li>

              <li className="nav-item me-3">Login</li>

              <li className="nav-item me-3">Logout</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

