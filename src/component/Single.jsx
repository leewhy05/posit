import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Single = () => {
    const [data, setData] = useState([]);
  const {postId} = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  let getData = async () => {

  try {
    let res = await fetch(`https://posit-ptta.onrender.com/api/getpost/${postId}`, {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      Authorization : `Bearer ${token}`
      
      },

  })
  let date = await res.json()

  console.log(date);
//   setData(date);

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
    <div>
         <hr />
     <div className="container">
      <div className="row justify-content-between align-items-center gap-5 my-4 ">
        {/* {data &&
          data.length > 0 &&
          data.map((datum) => {
            const { title, _id, description, tags } = datum;
            return (
             <Link className=" text-dark">
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
          })} */} 
           <div>
           <button className='btn btn-primary'>EDIT</button>
                <button className='btn btn-danger'>DELETE</button>
           </div>
      </div>
    </div>
    </div>
  )
}

export default Single