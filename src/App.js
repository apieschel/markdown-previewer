import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      input: '# This is a text area' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '## Line breaks are not automatic' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + 'Heres some inline code, `<div></div>`.'  + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '```' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '// How bout multiline.'  + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + 'console.log("Hello, world.")' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '```' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + 'Look at this [link](https://www.freecodecamp.com)' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '**heyo bold**' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '- Got a bullet for lists.' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '> Block Quote!' + String.fromCharCode(13, 10) + String.fromCharCode(13, 10) + '![React Logo w/ Text](https://goo.gl/Umyytc)'
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
    var rawMarkup = marked(text, {sanitize: true, breaks: true});
    return { __html: rawMarkup };
  }
	
  render() {
    return (
      <div className="App">
				<textarea id="editor" onChange={this.handleChange} cols="60" rows="30">
					{this.state.input}
				</textarea>
				<div id="preview" dangerouslySetInnerHTML={this.getMarkdownText(this.state.input)}>
				</div>
      </div>
    );
  }
}

export default App;
