import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

export const PostProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const token = localStorage.getItem("token");

  async function getLoggedIn() {
    const res = await fetch("http://localhost:8000/api/isLoggedIn", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    console.log();
    setLoggedIn(data);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <PostContext.Provider
      value={{
        loggedIn,
        getLoggedIn,
        logout,
        setLoggedIn,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;