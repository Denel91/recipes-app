import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "../data/recipes.json";
import "bootstrap/scss/bootstrap.scss";
import "../scss/style.css";

ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));