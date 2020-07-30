import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";

const initialItem = {
  type: "",
  quality: "",
  armor: "",
  durability: "",
  damage: "",
  cost: "",
  user_id: "",
};

const UsersItems = (props) => {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItem);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://arktracker.herokuapp.com/api/items/${localStorage.getItem(
          "user_id"
        )}/user`
      )
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) =>
        console.log(
          "sorry, an error has occurred while fetching users items page",
          err
        )
      );
  }, []);

  const editItem = (item) => {
    setEdit(true);
    setItemToEdit(item);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const { type, quality, armor, durability, damage, cost } = itemToEdit;

    axiosWithAuth()
      .put(`https://arktracker.herokuapp.com/api/items/${itemToEdit.id}`, {
        type,
        quality,
        armor,
        durability,
        damage,
        cost,
      })
      .then((res) => {
        console.log(res);
        document.location.reload(true);
      })
      .catch((err) => console.log("sorry, could not edit item", err.response));
  };

  const deleteItem = (item) => {
    axiosWithAuth()
      .delete(`https://arktracker.herokuapp.com/api/items/${item.id}`, item)
      .then((res) => {
        console.log(res);
        document.location.reload(true);
      })
      .catch((err) =>
        console.log("sorry, could not delete item", err.response)
      );
  };

  return (
    <>
      <div className="itemHalf">
        <h1 className="title">users items: </h1>

        <div>
          {items.map((item) => (
            <div key={item.id} className="items">
              <h2>{item.species}</h2>
              <p className="item-input">type: {item.type}</p>
              <p className="item-input">quality: {item.quality}</p>
              <p className="item-input">armor: {item.armor}</p>
              <p className="item-input">durability: {item.durability}</p>
              <p className="item-input">damage: {item.damage}</p>
              <p className="item-input">cost: {item.cost}</p>
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item)}>Delete</button>
              <hr />
            </div>
          ))}

          {edit && (
            <form onSubmit={saveEdit}>
              <div>
                <h3 className="edit-title">Edit Item </h3>
                <input
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, type: e.target.value })
                  }
                  value={itemToEdit.type}
                  placeholder={"type"}
                />

                <input
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, quality: e.target.value })
                  }
                  value={itemToEdit.quality}
                  placeholder={"quality"}
                />

                <input
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, armor: e.target.value })
                  }
                  value={itemToEdit.armor}
                  placeholder={"armor"}
                />

                <input
                  onChange={(e) =>
                    setItemToEdit({
                      ...itemToEdit,
                      durability: e.target.value,
                    })
                  }
                  value={itemToEdit.durability}
                  placeholder={"durability"}
                />

                <input
                  onChange={(e) =>
                    setItemToEdit({
                      ...itemToEdit,
                      damage: e.target.value,
                    })
                  }
                  value={itemToEdit.damage}
                  placeholder={"damage"}
                />
                <input
                  onChange={(e) =>
                    setItemToEdit({
                      ...itemToEdit,
                      cost: e.target.value,
                    })
                  }
                  value={itemToEdit.cost}
                  placeholder={"cost"}
                />
                <button type="submit">save</button>
                <button onClick={() => setEdit(false)}>cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UsersItems;
