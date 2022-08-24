import React, { useState } from "react";
import axios from "axios";
import { userAction } from "../actions/userAction";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { postData } from "../function";
import Navbar from "./Navbar";
import MessageBox from "./MessageBox";

import cogoToast from "cogo-toast";

function Task() {

  const [file, setSelectedFile] = React.useState(null);
  const [name, setname] = React.useState("");


  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let details = new FormData();
    for (const key of Object.keys(file)) {
      details.append('image', file[key])
    }
    details.append("name", name);
    postData(details, "/api/add-image", "added Successfully");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="login-section p-5">
              <form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">
                    Name
                  </label>
                  <input
                    type="Text"
                    id="form2Example3"
                    class="form-control"
                    autoFocus
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div class="form-outline mb-4">
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" onChange={(e) => setSelectedFile(e.target.files)} />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    class="btn btn-outline-primary  btn-block mb-4"
                  >
                    Submit
                  </button>
                  <Link
                    type="button"
                    class="btn btn-outline-danger mx-3  btn-block mb-4"
                    to="/login"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
              <div className="register">
                <Link to="/">Back?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
