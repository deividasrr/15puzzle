import React from "react";

const Cell = (props) => {
  const isEmptyCell = props.num === -1;
  return (
    <div
      num={props.num}
      index={props.index}
      className={"board-cell"}
      style={
        !isEmptyCell
          ? { backgroundColor: `rgb(${150 + props.index * 5}, 0, 0)` }
          : { backgroundColor: "white" }
      }
      onClick={() => props.handleClickCell(props.index)}
    >
      {!isEmptyCell ? props.num : null}
    </div>
  );
};

export default Cell;
