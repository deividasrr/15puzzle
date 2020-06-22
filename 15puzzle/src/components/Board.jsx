import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedCells: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1], // -1 represents the empty cell
      cells: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1], // -1 represents the empty cell
    };
  }

  checkIfSorted = () => {
    for (let x = 0; x < 16; x++) {
      if (this.state.sortedCells[x] !== this.state.cells[x]) {
        return false;
      }
    }
    return true;
  };

  shuffleCells = () => {
    let newCells = [...this.state.cells];
    // fisher-yates shuffle
    for (let i = newCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = newCells[i];
      newCells[i] = newCells[j];
      newCells[j] = temp;
    }
    this.setState({
      cells: newCells,
    });
  };

  handleClickCell = (index) => {
    let localCells = [...this.state.cells];
    let tempCell = null;
    // check top
    if (index - 4 >= 0 && localCells[index - 4] === -1) {
      tempCell = localCells[index - 4];
      localCells[index - 4] = localCells[index];
      localCells[index] = tempCell;
    }
    // check bottom
    else if (index + 4 < 16 && localCells[index + 4] === -1) {
      tempCell = localCells[index + 4];
      localCells[index + 4] = localCells[index];
      localCells[index] = tempCell;
    }
    // check left
    else if (index - 1 >= 0 && localCells[index - 1] === -1) {
      tempCell = localCells[index - 1];
      localCells[index - 1] = localCells[index];
      localCells[index] = tempCell;
    }
    // check right
    else if (index + 1 < 16 && localCells[index + 1] === -1) {
      tempCell = localCells[index + 1];
      localCells[index + 1] = localCells[index];
      localCells[index] = tempCell;
    }
    // one above condition was true
    if (tempCell != null) {
      this.setState({
        cells: localCells,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="board">
          {this.state.cells.map((el, index) => {
            return (
              <Cell
                key={"cell" + el}
                index={index}
                num={el}
                handleClickCell={this.handleClickCell}
              />
            );
          })}
        </div>
        <div className="menu">
          {/* <button>Restart</button> */}
          <button onClick={this.shuffleCells}>Shuffle</button>
          {/* <button>Solve</button> */}
        </div>
      </div>
    );
  }
}

export default Board;
