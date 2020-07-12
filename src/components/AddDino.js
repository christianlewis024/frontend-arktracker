import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/AxiosWithAuth";

const AddDino = (props) => {
  let history = useHistory();

  const [newDino, setNewDino] = useState({
    species: "",
    baselvl: "",
    gender: "",
    name: "",
    health: "",
    stamina: "",
    oxygen: "",
    food: "",
    weight: "",
    melee: "",
    speed: "",
    torp: "",
    user_id: localStorage.getItem("user_id"),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://arktracker.herokuapp.com/api/dinos", newDino)
      .then((res) => {
        // props.setNewDino(res.data);
        console.log("this is the new dino data", res.data);
        history.push("/dashboard");
        window.location.reload();
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setNewDino({ ...newDino, [e.target.name]: e.target.value });
  };

  return (
    <div className="entry-container">
      <h2>Add a Dino</h2>
      <form onSubmit={onSubmit}>
        <br></br>

        <input
          required
          label="species"
          id="species"
          name="species"
          placeholder="species"
          value={newDino.species}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="baselvl"
          id="baselvl"
          name="baselvl"
          placeholder="baselvl"
          value={newDino.baselvl}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="gender"
          id="gender"
          name="gender"
          placeholder="gender"
          value={newDino.gender}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="name"
          id="name"
          name="name"
          placeholder="name"
          value={newDino.name}
          onChange={handleChange}
        />
        <input
          label="health"
          id="health"
          name="health"
          placeholder="health"
          value={newDino.health}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="stamina"
          id="stamina"
          name="stamina"
          placeholder="stamina"
          value={newDino.stamina}
          onChange={handleChange}
        />
        <input
          label="oxygen"
          id="oxygen"
          name="oxygen"
          placeholder="oxygen"
          value={newDino.oxygen}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="food"
          id="food"
          name="food"
          placeholder="food"
          value={newDino.food}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="weight"
          id="weight"
          name="weight"
          placeholder="weight"
          value={newDino.weight}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="melee"
          id="melee"
          name="melee"
          placeholder="melee"
          value={newDino.melee}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="speed"
          id="speed"
          name="speed"
          placeholder="speed"
          value={newDino.speed}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="torp"
          id="torp"
          name="torp"
          placeholder="torp"
          value={newDino.torp}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit Dino</button>
      </form>
    </div>
  );
};

export default AddDino;
