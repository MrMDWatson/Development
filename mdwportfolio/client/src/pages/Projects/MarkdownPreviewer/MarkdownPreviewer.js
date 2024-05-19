import React, { useState } from "react";
import Markdown from "react-markdown";
import "./MarkdownPreviewer.css";

const textInput = `# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n      return multiLineCode;\n   }\n }\n\`\`\`\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**.\n\nThere's also [links](https://www.freecodecamp.org), and\n\>Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function Editor({ text, onChange }) {
  return (
    <div className="editor-box">
      <div className="sub-title-box"><h4>Editor</h4></div>
      <textarea
        id="editor"
        placeholder="Type here...."
        value={text}
        onChange={onChange}
      />
    </div>
  );
}
function Previewer({ text }) {
  return (
    <div className="previewer-box">
      <div className="sub-title-box"><h4>Previewer</h4></div>
      <Markdown className="text-box">{text}</Markdown>
    </div>
  );
}
export default function MarkdownPreviewer() {
  const [text, setText] = useState(textInput);
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div className="toolbar">
      <Editor
        text={text}
        onChange={onChange}/>
      <Previewer
        text={text}/>
    </div>
  );
}