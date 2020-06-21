import React from "react";

const Cell = (props) => {
  console.log(props);
  return (
    <div
      num={props.num}
      index={props.index}
      // className={
      //   props.num !== -1 ? "board-cell" : "board-cell board-cell-empty"
      // }
      style={
        props.num === -1
          ? { backgroundColor: "white", color: "white" }
          : { backgroundColor: "pink", color: "black" }
      }
      className={"board-cell"}
      onClick={() => props.handleClickCell(props.index)}
    >
      {props.num}
    </div>
  );
};

export default Cell;
