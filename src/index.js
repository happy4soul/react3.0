import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const time = currentDate.getHours();
var print = "morning";
var changeColor = {
  color: "red"
};
if (time > 12 && time < 18) {
  print = "afternoon";
  changeColor.color = "green";
} else if (time > 18 && time < 24) {
  print = "night";
  changeColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={changeColor}>
      {" "}
      Good {print}{" "}
    </h1>
  </div>,

  document.querySelector("#root")
);
