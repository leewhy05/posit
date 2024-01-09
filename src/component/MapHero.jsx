import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MapHero = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    const token = localStorage.getItem('token');
    // let userId = '657083f5e8d3b851e0c75f3f'
    let userId = useParams()
    console.log(userId);

    try {
      let response = await fetch(`http://localhost:8000/api/userpost/${userId}`, {
      method:'GET',
      headers:{
        Authorization : `Bearer ${token}`,
        'Content-Type': 'application/json'
        
        },

    })
    console.log(userId);
    let data = await response.json()
    setData(data.post);
    console.log(data.post);
  
    } catch (error) {
      if (error) {
        setError(error);
        console.log(error);
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
              <div key={_id} className="border col-md-5 p-3">
                {/* <img src={displayPic} alt="" className="img-fluid" /> */}
                <h2>
                  <span className="text-success fw-bold">title:</span> {title}
                </h2>
                <h4>
                  <span>story:</span> {description}
                </h4>
                <h2> {tags} </h2>
                <p>created by: {datum.createdBy.name} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MapHero;
