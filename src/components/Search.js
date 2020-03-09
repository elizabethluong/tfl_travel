import React from "react";

export default function Search(props) {
  let aLine = props.state.trainline;
  let inVal = props.state.value;
  let tLine = props.typeLine;
  let sLine = props.submitLine;
  console.log(aLine);
  console.log(inVal);
  console.log(tLine);
  console.log(sLine);

  return (
    <div>
      <form onSubmit={event => sLine(event)}>
        <input
          type="text"
          value={inVal}
          list="data"
          placeholder="Search line status"
          onChange={event => tLine(event)}
        />
        <input type="submit" value="Submit" />
      </form>
      <div className="lineInfo">
        <h1>Line: {aLine.name}</h1>
      </div>
    </div>
  );
}
