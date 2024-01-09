import React, {useEffect, useState} from 'react'
import Hero from '../component/Hero'
import HeroTwo from '../component/HeroTwo'

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const fetcher = await fetch("https://posit-ptta.onrender.com/api/allposts");
      const res = await fetcher.json();
      console.log(res.allPosts);
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
        <div className='container'>
    <div className="row justify-content-between align-items-center gap-5 my-4 ">
        {error && <h1>{error.message}</h1>}
        {data && data.length > 0 && (
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
                {/* <p>created by: {datum.createdBy.name} </p> */}
              </div>
            );
          })
        )}
       
      </div>
    </div>
      <div>
      <HeroTwo/>
      </div>
    </div>
  )
}

export default Home