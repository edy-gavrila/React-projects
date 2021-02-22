import React from "react";
import "./editor.css";

const preview = (props) =>{
    return (
        
        <div className = "input-container">
            <textarea id = "editor" className="editor" onChange = {props.onChange} value = {props.value}>
                Markdown goes here
            </textarea>
        </div>
    )
}

export default preview;