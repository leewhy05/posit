import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

export const PostProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const token = localStorage.getItem("token");

  async function getLoggedIn() {
    const res = await fetch("https://posit-ptta.onrender.com/api/isLoggedIn", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
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