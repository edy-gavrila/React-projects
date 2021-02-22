import React from "react";
import "./preview.css";

const preview = (props) => {
    console.log(props.content);
  return <div className="preview-container" id="preview"  dangerouslySetInnerHTML= {{__html: props.content}}></div>;
};

export default preview;
