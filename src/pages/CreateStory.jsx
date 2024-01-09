import React, { useState } from "react";
import "../styles/create.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Edit from "../assets/edit.svg";
import toast from "react-hot-toast";

const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const post = {
    title,
    tags,
    description,
  };
  
  const handlePost = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch("https://posit-ptta.onrender.com/api/posts", {
        method: "POST",
        headers: {
          Authorization:` Bearer ${token}`,

          "Content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const res = await fetchData.json();
      console.log(res);
      if(res.message === 'post created successfully'){
        toast.success(res.message)
        navigate('/HomeTwo')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mt-4">
          <Link
            to={"/"}
            className="text-decoration-none text-dark fs-1 fw-bold"
          >
            <span className="">Create Story</span>
          </Link>
        </div>

        <div className="fieldset-container m-5 h-25">
          <h5
            className="fieldset-title fs-4"
            style={{ backgroundColor: "#0086b0" }}
          >
            <img src={Edit} alt="" />
          </h5>
          <input type="text" onChange={(e)=> setTitle(e.target.value) }  value={title} className="w-100" placeholder="E.g Title ..." />
        </div>
        <div className="fieldset-containers m-5 ">
          <h5
            className="fieldset-title fs-4"
            style={{ backgroundColor: "#0086b0" }}
          >
            <img src={Edit} alt="" />{" "}
          </h5>
          <input type="text" onChange={(e)=> setDescription(e.target.value) }  value={description} className="w-100" placeholder="Description..." />
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
            onChange={(e)=> setTags(e.target.value) } 
             value={tags}
            className="bord"
          >
            <option>----</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Nature">Nature</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
          </Form.Select>
        </div>
        <div>
          <button
            className="btn btn- text-light fs-4 fw-bold btn-lg w-100"
            type="submit"
            onClick={handlePost}
            style={{ backgroundColor: "#0086b0" }}
          >
            Publish Story
          </button>
        </div>
        <Link>
          <p className="text-center mt-4" style={{ color: "#0086b0" }}>
            Back to Top
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CreateStory;
