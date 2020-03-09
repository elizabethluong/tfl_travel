import React from "react";

export default function Search(props) {
  let aLine = props.state.addLine;
  let inVal = props.state.value;
  let tLine = props.typeLine;

  return (
    <div>
      <form onSubmit={event => aLine(event)}>
        <input
          type="text"
          value={inVal}
          list="data"
          placeholder="Search line status"
          onChange={event => tLine(event)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
