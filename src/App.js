import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Todos from './components/Todos';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Buy a chewing toy for Fluffy',
        completed: false
      },
      {
        id: 3,
        title: 'Call Nicole about the picnic',
        completed: false
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <Header />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
