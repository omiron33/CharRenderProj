import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

  state = {
   word: "",
   letterArray: [],
  }

  wordChangeHandler = (event) => {
    let newword = event.target.value;
    
    this.setState({word: newword, letterArray: newword.split("")});
  }

  deleteLetter = letterIndex => {
    const chosenletter = this.state.letterArray.slice();
    chosenletter.splice(letterIndex, 1);
    this.setState({ letterArray: chosenletter });
    this.setState({ word: chosenletter.join('') })
  }



  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.wordChangeHandler} value={this.state.word} />
        <p>The length of the word is {this.state.word.length} characters.</p>
        <ValidationComponent
          wordLength={this.state.word.length}
        />
        {this.state.letterArray.map((letter, index) => {
          return (
            <CharComponent
              click={() => this.deleteLetter(index)}
              letter={letter}
              key={index}
            />
          )
        }
        
        )}
      </div>
    );
  }


}

export default App;
