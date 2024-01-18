import React, {useEffect, useState} from 'react'
import Hero from '../component/Hero'
import HeroTwo from '../component/HeroTwo'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const fetcher = await fetch("https://posit-ptta.onrender.com/api/allposts");
      const res = await fetcher.json();
      console.log(res.allPosts);
      console.log(res.allPosts[0].createdBy.name);
      setData(res.allPosts);
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
    <div>
       <div>
       <Hero/>
       </div>
       <div className="container">
      <div className="row justify-content-between align-items-center gap-5 my-4 ">
        {error && <h1>{error.message}</h1>}
        {data &&
          data.length > 0 &&
          data.map((datum) => {
            const { title, _id, description, tags } = datum;
            return (
             <Link className="border col-md-5 p- text-dark text-decoration-none">
              <div key={_id} >
                {/* <img src={displayPic} alt="" className="img-fluid" /> */}
                <h2>
                  <span className="text-success fw-bold">TITLE:</span> {title}
                </h2>
                <h4>
                  <span>STORY:</span> {description}
                </h4>
                <h2><span>TAG:</span> {tags} </h2>
                {/* <p>created by: {datum.createdBy.name} </p> */}
              </div>
             </Link>
            );
          })}
      </div>
    </div>
      <div>
      <HeroTwo/>
      </div>
    </div>
   
  )
}

export default Home