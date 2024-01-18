import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MapHero = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  let userId = useParams()
  const token = localStorage.getItem('token');
  const getData = async () => {
    //  let userId = '657083f5e8d3b851e0c75f3f'
    // console.log(userId);

    try {
      let response = await fetch(`https://posit-ptta.onrender.com/api/userpost/${userId}`, {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
        
        },

    })
    // console.log(response);
    // console.log(userId);
    let data = await response.json()

    console.log(data);
    setData(data.post);
  
    } catch (error) {
      if (error) {
        setError(error);
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center gap-5 my-4 ">
        {error && <h1>{error.message}</h1>}
        {data &&
          data.length > 0 &&
          data.map((datum) => {
            const { title, _id, description, tags } = datum;
            return (
              <Link to={`/SingleStory`} className="border col-md-5 p-3 text-decoration-none text-dark">
              <div key={_id} >
                <h2>
                  <span className="text-success fw-bold">title:</span> {title}
                </h2>
                <h4>
                  <span>story:</span> {description}
                </h4>
                <h2> {tags} </h2>
                <p>created by: {datum.createdBy.name} </p>
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MapHero;
