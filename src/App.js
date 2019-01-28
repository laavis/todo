import React, { Component } from 'react';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
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
  padding: 6px;
  display: flex;
  flex: 3;
  flex-direction: column;
  background-color: #F2F2F2;
  overflow: hidden;
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

// ToggleComplete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Delete todo
  delTodo = (id) => {
    setTimeout(() => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }, 1000);
  }

  render() {
    return (
      <AppComponent>
        <GlobalStyle/>
        <Header />
        <MainWrapper>
          <Sidebar />
          <TodoWrapper>
            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
              delTodo={this.delTodo}/>
          </TodoWrapper>
        </MainWrapper>
      </AppComponent>
    );
  }
}

export default App;
