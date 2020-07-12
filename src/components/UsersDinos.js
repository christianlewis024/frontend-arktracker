import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";

const initialDino = {
  id: "",
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
  user_id: "",
};

const UsersDinos = (props) => {
  const [dinos, setDinos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [dinoToEdit, setDinoToEdit] = useState(initialDino);
  // `/${props.user_id || localStorage.getItem("id")}/dinos`
  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://arktracker.herokuapp.com/api/dinos/${localStorage.getItem(
          "user_id"
        )}/user`
      )
      .then((res) => {
        setDinos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error fetching users dinos page", err));
  }, []);

  const editDino = (dino) => {
    setEdit(true);
    setDinoToEdit(dino);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const {
      species,
      baselvl,
      gender,
      name,
      health,
      stamina,
      oxygen,
      food,
      weight,
      melee,
      speed,
      torp,
    } = dinoToEdit;

    axiosWithAuth()
      .put(`https://arktracker.herokuapp.com/api/dinos/${dinoToEdit.id}`, {
        species,
        baselvl,
        gender,
        name,
        health,
        stamina,
        oxygen,
        food,
        weight,
        melee,
        speed,
        torp,
      })
      .then((res) => {
        console.log(res);
        document.location.reload(true);
      })
      .catch((err) => console.log("error editing dino", err.response));
  };

  const deleteDino = (dino) => {
    axiosWithAuth()
      .delete(`https://arktracker.herokuapp.com/api/dinos/${dino.id}`, dino)
      .then((res) => {
        console.log(res);
        document.location.reload(true);
      })
      .catch((err) => console.log("error deleting dino", err.response));
  };

  return (
    <>
      <h1 className="title">Your Dinos: </h1>

      <div>
        {dinos.map((dino) => (
          <div key={dino.id} className="dinos">
            <h2>{dino.species}</h2>
            <p className="dino_input">Species: {dino.species}</p>
            <p className="dino_input">baselvl: {dino.baselvl}</p>
            <p className="dino_input">gender: {dino.gender}</p>
            <p className="dino_input">name: {dino.name}</p>
            <p className="dino_input">health: {dino.health}</p>
            <p className="dino_input">stamina: {dino.stamina}</p>
            <p className="dino_input">oxygen: {dino.oxygen}</p>
            <p className="dino_input">food: {dino.food}</p>
            <p className="dino_input">weight: {dino.weight}</p>
            <p className="dino_input">melee: {dino.melee}</p>
            <p className="dino_input">speed: {dino.speed}</p>
            <p className="dino_input">torp: {dino.torp}</p>

            <button onClick={() => editDino(dino)}>Edit</button>
            <button onClick={() => deleteDino(dino)}>Delete</button>
            <hr />
          </div>
        ))}

        {edit && (
          <form onSubmit={saveEdit}>
            <div>
              <h3 className="edit-title">Edit Dino </h3>
              <input
                onChange={(e) =>
                  setDinoToEdit({ ...dinoToEdit, species: e.target.value })
                }
                value={dinoToEdit.species}
                placeholder={"species"}
              />

              <input
                onChange={(e) =>
                  setDinoToEdit({ ...dinoToEdit, baselvl: e.target.value })
                }
                value={dinoToEdit.baselvl}
                placeholder={"baselvl"}
              />

              <input
                onChange={(e) =>
                  setDinoToEdit({ ...dinoToEdit, gender: e.target.value })
                }
                value={dinoToEdit.gender}
                placeholder={"gender"}
              />

              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    name: e.target.value,
                  })
                }
                value={dinoToEdit.name}
                placeholder={"name"}
              />

              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    health: e.target.value,
                  })
                }
                value={dinoToEdit.health}
                placeholder={"health"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    stamina: e.target.value,
                  })
                }
                value={dinoToEdit.stamina}
                placeholder={"stamina"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    oxygen: e.target.value,
                  })
                }
                value={dinoToEdit.oxygen}
                placeholder={"oxygen"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    food: e.target.value,
                  })
                }
                value={dinoToEdit.food}
                placeholder={"food"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    weight: e.target.value,
                  })
                }
                value={dinoToEdit.weight}
                placeholder={"weight"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    melee: e.target.value,
                  })
                }
                value={dinoToEdit.melee}
                placeholder={"melee"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    speed: e.target.value,
                  })
                }
                value={dinoToEdit.speed}
                placeholder={"speed"}
              />
              <input
                onChange={(e) =>
                  setDinoToEdit({
                    ...dinoToEdit,
                    torp: e.target.value,
                  })
                }
                value={dinoToEdit.torp}
                placeholder={"torp"}
              />
              <button type="submit">Save Changes</button>
              <button onClick={() => setEdit(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UsersDinos;
