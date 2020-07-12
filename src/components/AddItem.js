import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/AxiosWithAuth";

const AddItem = (props) => {
  let history = useHistory();

  const [newItem, setNewItem] = useState({
    type: "",
    quality: "",
    armor: "",
    durability: "",
    damage: "",
    cost: "",
    user_id: localStorage.getItem("user_id"),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://arktracker.herokuapp.com/api/items", newItem)
      .then((res) => {
        console.log("this is the new item data", res.data);
        history.push("/dashboard");
        window.location.reload();
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <div className="entry-container">
      <h2>Add an Item</h2>
      <form onSubmit={onSubmit}>
        <br></br>

        <input
          required
          label="type"
          id="type"
          name="type"
          placeholder="type"
          value={newItem.type}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="quality"
          id="quality"
          name="quality"
          placeholder="quality"
          value={newItem.quality}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="armor"
          id="armor"
          name="armor"
          placeholder="armor"
          value={newItem.armor}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="durability"
          id="durability"
          name="durability"
          placeholder="durability"
          value={newItem.durability}
          onChange={handleChange}
        />
        <input
          label="damage"
          id="damage"
          name="damage"
          placeholder="damage"
          value={newItem.damage}
          onChange={handleChange}
        />
        <br></br>
        <input
          label="cost"
          id="cost"
          name="cost"
          placeholder="cost"
          value={newItem.cost}
          onChange={handleChange}
        />

        <br></br>
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
};

export default AddItem;
