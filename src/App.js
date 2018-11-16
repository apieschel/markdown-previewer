import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      input: '**Heyo**',
    }
    this.handleChange = this.handleChange.bind(this);
		this.getMarkdownText = this.getMarkdownText.bind(this);
  }
	
	handleChange(event) {
		this.setState({
			input: event.target.value
		});
	}
	
	getMarkdownText(text) {
    var rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }
	
  render() {
    return (
      <div className="App">
				<textarea id="editor" onChange={this.handleChange} value="**heyo**"></textarea>
				<div id="preview" dangerouslySetInnerHTML={this.getMarkdownText(this.state.input)}>
				</div>
      </div>
    );
  }
}

export default App;
