import React from 'react'
import "../styles/create.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Edit from "../assets/edit.svg";

const EditStory = () => {
  return (
    <div>
        <div>
      <div className="container">
        <div className="mt-4">
          <Link
            className="text-decoration-none text-dark fs-1 fw-bold"
          >
            <span className="">Edit Story</span>
          </Link>
        </div>

        <div className="fieldset-container m-5 h-25">
          <h5
            className="fieldset-title fs-4"
            style={{ backgroundColor: "#0086b0" }}
          >
            <img src={Edit} alt="" />
          </h5>
          <input type="text" className="w-100" placeholder="E.g Title ..." />
        </div>
        <div className="fieldset-containers m-5 ">
          <h5
            className="fieldset-title fs-4"
            style={{ backgroundColor: "#0086b0" }}
          >
            <img src={Edit} alt="" />{" "}
          </h5>
          <input type="text" className="w-100" placeholder="Description..." />
        </div>
        <div className="fieldset-container m-5 ">
          <h5
            className="fieldset-title fs-4"
            style={{ backgroundColor: "#0086b0" }}
          >
            <img src={Edit} alt="" />
          </h5>
          <Form.Select
            aria-label="Default select example"
            placeholder="tag"
            className="bord"
          >
            <option>----</option>
            <option value="urgent">Lifestle</option>
            <option value="important">Nature</option>
            <option value="important">Entertainment</option>
            <option value="important">Technology</option>
          </Form.Select>
        </div>
        <div>
          <button
            className="btn btn- text-light fs-4 fw-bold btn-lg w-100"
            type="submit"
            style={{ backgroundColor: "#0086b0" }}
          >
            Update Story
          </button>
        </div>
        <Link>
          <p className="text-center mt-4" style={{ color: "#0086b0" }}>
            Back to Top
          </p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default EditStory