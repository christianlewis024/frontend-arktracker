import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
// import DinoList from "./DinoList";
import AddDino from "../components/AddDino";
import UsersDinos from "./UsersDinos";
import AddItem from "./AddItem";
import UsersItems from "./UsersItems";
import "../css/auth.css";
import "../css/dash.css";
import bgimg from "./img/hexagons.jpg";

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
      <img src={bgimg} className="bgimg" />
      <div className="banner">
        <p>Welcome to Ark Tracker. Please Keep track of your tame stats.</p>

        <button onClick={logout} className="logout">
          Log Out
        </button>
      </div>
      <div className="dinosAndItems">
        <div className="dinoComp">
          <div className="addDino">
            <AddDino />
          </div>
          <UsersDinos />
        </div>
        <div className="itemComp">
          <br></br>
          <div className="addItem">
            <AddItem />
          </div>
          <UsersItems />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
