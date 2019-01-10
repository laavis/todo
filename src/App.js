import React, { Component } from 'react';
import styled from 'styled-components';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Todos from './components/Todos';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
`

const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

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
      <AppComponent>
        <GlobalStyle/>
        <Header />
        <MainWrapper>
          <Sidebar />
          <TodoWrapper>
            <Todos todos={this.state.todos} />
          </TodoWrapper>
        </MainWrapper>
      </AppComponent>
    );
  }
}

export default App;
