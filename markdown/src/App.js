import React, { Component } from "react";
import "./App.css";
import Editor from "./editor/editor.js";
import Preview from "./preview/preview.js";
import Footer from "./footer/footer.js";
import marked from "marked";

class App extends Component {
  state = {
    markdown: ("# Welcome to my React Markdown Previewer\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine,lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n   }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)" ),

    renderer: new marked.Renderer(),
    parsedHtml: marked(("# Welcome to my React Markdown Previewer\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine,lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n   }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)" ), {
      renderer: new marked.Renderer(),
      breaks: true,
    }),
    
  };

  textEditorInputHandler(event) {
    const parsed = marked(event.target.value, {
      renderer: this.state.renderer,
      breaks: true,
    });
    this.setState({
      markdown: event.target.value,
      parsedHtml: parsed,
    });
  }


  render() {
 console.log("A");
    return (
      <div>
        <h1 className="header">Markdown Previewer</h1>
        <div className="container">
          <Editor
            onChange={this.textEditorInputHandler.bind(this)}
            value={this.state.markdown}
          />
          <Preview content={this.state.parsedHtml} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
