import React from "react";
import Board from "./Board";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <h1>15 Puzzle</h1>
        <Board />
      </div>
    );
  }
}

export default Wrapper;
