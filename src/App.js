import React, { Component } from 'react';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import Sidebar from './components/Sidebar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,900');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
  }
  input { font-family: 'Source Sans Pro', sans-serif; }

  h1, h2, h3 {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 900;
    color: #5B504B;
  }

  h1 { font-size: 2.25rem }
  h2 { font-size: 1.125rem; }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

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
  flex: 3;
  flex-direction: column;
  padding: 0.875rem 1.5rem;
  background-color: #F1EDE9;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  width: 10em;
  padding-bottom: 0.875rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #C2BAB6;
`;

const Date = styled.p`
  color: #817773;
  font-size: 1.125rem;
  margin-left: 6px;
`;

const TodosContainer = styled.div`
  border-radius: 2px;
  background-color: #FEFEFE;
  box-shadow: 4px 4px 15px rgba(73, 60, 53, 0.15);
`;

const Category = styled.h2`
  margin-left: 4px;
  margin-bottom: 6px;
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
    }, 400);
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <AppComponent>
        <GlobalStyle/>
        <MainWrapper>
          <Sidebar />
          <TodoWrapper>
            <Header>
              <h1>Today</h1>
              <Date>29 January 2019</Date>
            </Header>
            <Category>All</Category>
            <TodosContainer>
            <Todos todos={ this.state.todos }
                   toggleComplete={ this.toggleComplete }
                   delTodo={ this.delTodo } />
            </TodosContainer>
            <AddTodo addTodo={ this.addTodo }/>

          </TodoWrapper>
          
        </MainWrapper>
      </AppComponent>
    );
  }
}

export default App;
