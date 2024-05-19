import React from "react";
import ReactMarkdown from "react-markdown";
import { data } from "./dataFile";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = data
  }
  onChange = (e) => {
    this.setState({text: e.target.value});
  };
  render() {
    return  (
      <div>
        <div className="toolbar">
          <Editor 
            data={this.state}
            onChange={this.onChange}/>
          <Previewer data={this.state}/>
        </div>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  (
      <div className="editor-box">
        <div className="sub-title-box"><h4>Editor</h4></div>
        <textarea
          id="editor"
          placeholder="# Your mom"
          value={this.props.data.text}
          onChange={this.props.onChange}></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  (
      <div className="previewer-box">
        <div className="sub-title-box"><h4>Previewer</h4></div>
        <div id="previewer">
          <ReactMarkdown children={this.props.data.text}/>
        </div>
      </div>
    );
  }
}