import React, { Component } from "react";
import { useState } from "react";

// function pokemon(props) {

//   return (
//     <div>
//       <button>POKEMON</button>
//     </div>
//   );
// }

// export default pokemon;

import PropTypes from "prop-types";
var item1;

class pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  async componentWillMount() {
    await fetch("https://randomuser.me/api/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(JSON.parse(data));
        var user = JSON.parse(data);

        item1 = user.info;
        var item2 = user.results[0].name.first;
        var item3 = user.results[0].name.las;
        var item4 = user.results[0].location.street.name;
        var item5 = user.results[0].email;
      });
  }

  render() {
    return (
      <div>
        <p>hjbjbd</p>
        <p>{this.item1}</p>
      </div>
    );
  }
}

pokemon.propTypes = {};

export default pokemon;
