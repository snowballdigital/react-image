import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Module from "../src";
import images from "./images";

ReactDOM.render(
  <div>
    <Module {...images[0]} sizes="(min-width: 900px) 800px, 80vw" />
    <div> - - - </div>
    <Module
      src={images[0].url}
      alt="Alt text"
      sizes="(min-width: 900px) 800px, 80vw"
    />
    <Module {...images[0]}>
      {p => {
        console.log(p);
        return <div>Hey from child as render func</div>;
      }}
    </Module>
  </div>,
  document.getElementById("root")
);
