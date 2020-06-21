import React from "react";
import Board from "./Board";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <body>
          <div className="header">
            <h1>15 Puzzle</h1>
            <h3>Order the cells in ascending order to solve the puzzle.</h3>
          </div>
          <main>
            <Board />
          </main>
          <footer>
            <div>
              Created by{" "}
              <a href="https://deividasrr.github.io/">Deividas Rutkauskas</a>
              <br></br>
              Source code at{" "}
              <a href="https://github.com/deividasrr/15puzzle">Github</a>
              <br></br>
              2020
              <br></br>
              <span>&#9996;</span>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default Wrapper;
