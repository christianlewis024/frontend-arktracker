import React from "react";

const DinoCard = (props) => {
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
  } = props.dino;
  return (
    <div className="dino-card">
      <h2>{species}</h2>
      <div className="dino-species">
        species: <em>{species}</em>
      </div>
      <div className="dino-baselvl">
        baselvl: <strong>{baselvl}</strong>
      </div>
      <div className="dino-gender">
        gender: <strong>{gender}</strong>
      </div>
      <div className="dino-name">
        name: <strong>{name}</strong>
      </div>
      <div className="dino-health">
        health: <strong>{health}</strong>
      </div>
      <div className="dino-stamina">
        stamina: <strong>{stamina}</strong>
      </div>
      <div className="dino-oxygen">
        oxygen: <strong>{oxygen}</strong>
      </div>
      <div className="dino-food">
        food: <strong>{food}</strong>
      </div>
      <div className="dino-weight">
        weight: <strong>{weight}</strong>
      </div>
      <div className="dino-melee">
        melee: <strong>{melee}</strong>
      </div>
      <div className="dino-speed">
        speed: <strong>{speed}</strong>
      </div>
      <div className="dino-torp">
        torp: <strong>{torp}</strong>
      </div>
    </div>
  );
};

export default DinoCard;

// import React, { useState } from "react";
// import axiosWithAuth from "../utils/AxiosWithAuth";
// import { useHistory } from "react-router-dom";

// const DinoCard = (props) => {
//   const { push } = useHistory();

//   const [editing, setEditing] = useState(false);
//   const [dinoToEdit, setDinoToEdit] = useState({
//     user_id: "",
//     species: "",
//     baselvl: "",
//     gender: "",
//     name: "",
//     health: "",
//     stamina: "",
//     oxygen: "",
//     food: "",
//     weight: "",
//     melee: "",
//     speed: "",
//     torp: "",
//   });
//   const editDinos = (post) => {
//     setEditing(true);
//     setDinoToEdit(post);
//   };
//   const saveEdit = (e) => {
//     e.preventDefault();
//     console.log("dino to edit", dinoToEdit);
//     axiosWithAuth()
//       .put(
//         `https://arktracker.herokuapp.com/api/dinos/${props.dinos.id}`,
//         dinoToEdit
//       )
//       .then((res) => {
//         console.log(res.data);
//         window.location.reload();
//         push("/dashboard");
//       });
//   };
//   const deleteDino = (dinos) => {
//     axiosWithAuth()
//       .delete(`http://arktracker.herokuapp/com/api/dinos/${props.dinos.id}`)
//       .then((res) => {
//         console.log(res);
//         window.location.reload();
//       });
//   };

//   return (
//     <div className="newcard">
//       <div className="postcard">
//         <div className="halfcard">
//           <h2>{props.dinos.species}...</h2>
//           <h3>{props.dinos.baselvl}</h3>
//           <h3>{props.dinos.gender}</h3>
//           <h3>{props.dinos.name}</h3>
//           <h3>{props.dinos.health}</h3>
//           <h3>{props.dinos.stamina}</h3>
//           <h3>{props.dinos.oxygen}</h3>
//           <h3>{props.dinos.food}</h3>
//           <h3>{props.dinos.weight}</h3>
//           <h3>{props.dinos.melee}</h3>
//           <h3>{props.dinos.speed}</h3>
//           <h3>{props.dinos.torp}</h3>
//         </div>
//       </div>
//       <div className="cardbody" key={props.dino.id}>
//         <button onClick={deleteDino} id="x">
//           x
//         </button>
//         <button onClick={() => editDinos(props.dino.id)} id="edit">
//           edit
//         </button>
//         {editing && (
//           <form onSubmit={saveEdit} className="editForm">
//             <legend>edit</legend>
//             <label>
//               Dino Species:
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({ ...dinoToEdit, species: e.target.value })
//                 }
//                 value={dinoToEdit.species}
//               />
//             </label>
//             <br></br>
//             <label>
//               baselvl
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     baselvl: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.baselvl}
//               />
//             </label>
//             <br></br>
//             <label>
//               gender
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     gender: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.gender}
//               />
//             </label>
//             <label>
//               name
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     name: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.name}
//               />
//             </label>
//             <label>
//               health
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     health: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.health}
//               />
//             </label>
//             <label>
//               stamina
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     stamina: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.stamina}
//               />
//             </label>
//             <label>
//               oxygen
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     oxygen: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.oxygen}
//               />
//             </label>
//             <label>
//               food
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     food: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.food}
//               />
//             </label>
//             <label>
//               weight
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     weight: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.weight}
//               />
//             </label>
//             <label>
//               melee
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     melee: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.melee}
//               />
//             </label>
//             <label>
//               speed
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     speed: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.speed}
//               />
//             </label>
//             <label>
//               torpor
//               <input
//                 onChange={(e) =>
//                   setDinoToEdit({
//                     ...dinoToEdit,
//                     torpor: e.target.value,
//                   })
//                 }
//                 value={dinoToEdit.torpor}
//               />
//             </label>
//           </form>
//         )}
//         <h2>Dinos</h2>
//         <p>
//           Species: <br></br>
//           {props.dino.species}
//         </p>
//         <p>
//           baselvl: <br></br>
//           {props.dino.baselvl}
//         </p>
//         <p>
//           gender: <br></br>
//           {props.dino.gender}
//         </p>
//         <p>
//           name: <br></br>
//           {props.dino.name}
//         </p>
//         <p>
//           health: <br></br>
//           {props.dino.health}
//         </p>
//         <p>
//           stamina: <br></br>
//           {props.dino.stamina}
//         </p>
//         <p>
//           oxygen: <br></br>
//           {props.dino.oxygen}
//         </p>
//         <p>
//           food: <br></br>
//           {props.dino.food}
//         </p>
//         <p>
//           weight: <br></br>
//           {props.dino.weight}
//         </p>
//         <p>
//           speed: <br></br>
//           {props.dino.speed}
//         </p>
//         <p>
//           torp: <br></br>
//           {props.dino.torp}
//         </p>
//       </div>
//     </div>
//   );
// };
// export default DinoCard;
