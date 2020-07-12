import React, { Component } from "react";
import axios from "axios";

import DinoCard from "./DinoCard";

export default class DinoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://arktracker.herokuapp.com/api/dinos")
      .then((res) => this.setState({ dinos: res.data }))
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
      <div className="dino-list">
        {this.state.dinos.map((dino) => (
          <DinoDetails key={dino.id} dino={dino} />
        ))}
      </div>
    );
  }
}

function DinoDetails({ dino }) {
  return <DinoCard dino={dino} />;
}

// import React, { useState } from "react";

// import DinoCard from "./DinoCard";

// const DinoList = (props) => {
//   return (
//     <div>
//       {props.dinos &&
//         props.dinos.map((dino) => {
//           return <DinoCard dino={dino} key={dino.id} />;
//         })}
//     </div>
//   );
// };
// export default DinoList;
