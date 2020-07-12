import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
// import DinoList from "./DinoList";
import AddDino from "../components/AddDino";
import UsersDinos from "./UsersDinos";
import AddItem from "./AddItem";
import UsersItems from "./UsersItems";
import "../css/auth.css";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://arktracker.herokuapp.com/api/dinos")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  }, []);
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    history.push("/");
  };
  return (
    <div className="body">
      <div className="banner">
        <p>Welcome to Ark Tracker. Please Keep track of your tame stats.</p>

        <button onClick={logout}>Log Out</button>

        <div>
          <AddDino />
        </div>
      </div>
      {/* <DinoList dinos={posts} /> */}
      <UsersDinos />
      <h3>Items!! </h3>
      <br></br>
      <AddItem />
      <UsersItems />
    </div>
  );
};
export default Dashboard;
