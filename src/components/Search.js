import React from "react";

export default function Search(props) {
  let trainline = props.state.trainline;
  let inVal = props.state.value;
  let lineColour = props.state.tflLineColour;
  let sLine = props.submitLine;
  let tLine = props.typeLine;
  console.log(trainline);
  console.log(inVal);
  console.log(tLine);

  return (
    <div className="trainline">
      <h1>Tube Statuses</h1>
      <p>Type in a Tube line to find out it's status:</p>
      <form onSubmit={event => sLine(event)}>
        <input
          type="text"
          className="input is-danger input is-large"
          value={inVal}
          list="data"
          placeholder="Search Line"
          onChange={event => tLine(event)}
        />
        <input type="submit" value="Submit" />
      </form>

      {trainline.length > 0
        ? trainline.map((trainline, key) => (
            <div>
              <p style={{ backgroundColor: lineColour[trainline] }}>
                Line: {trainline.name}
              </p>
              <p>
                Line status: 
                {trainline.lineStatuses[0].statusSeverityDescription}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}
