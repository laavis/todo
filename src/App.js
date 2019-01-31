import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import dateFns from 'date-fns';

import pattern from './img/stripes.png';

import { createGlobalStyle } from 'styled-components';
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
    color: #817773;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${pattern});
`;

const TodoWrapper = styled.div`
  width: 30vw;
  min-width: 500px;
  min-height: 600px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 0.875rem 1.5rem;
  position: relative;
  background-color: #f1ede9;
  box-shadow: 4px 4px 30px rgba(73, 60, 53, 0.3);

  @media (max-width: 500px) {
    padding: 1rem;
    min-width: 100vw;
    height: 100vh;
    border-radius: 0px;
  }
`;

const Header = styled.div`
  width: 10em;
  padding-bottom: 0.875rem;
  padding-top: 0.875rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c2bab6;

  @media (max-width: 500px) {
    width: 100vw;
    margin: -1rem 0 2rem -1rem;
    text-align: center;
    border-bottom: none;

    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const SDate = styled.p`
  color: #817773;
  font-size: 1.125rem;
  margin-left: 6px;
`;

const TodosContainer = styled.div`
  border-radius: 2px;
  background-color: #fefefe;
  max-height: 21rem;
  overflow-y: auto;
  box-shadow: 4px 4px 15px rgba(73, 60, 53, 0.15);
`;

const Category = styled.h2`
  margin-left: 4px;
  margin-bottom: 6px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new window.Date().toLocaleString(),
      todos: [
        {
          id: uuid.v4(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Buy a chewing toy for Fluffy',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Call Nicole about the picnic',
          completed: false
        }
      ]
    };
  }

  getDate = () => {
    return this.state.date;
  };

  // ToggleComplete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete todo
  delTodo = id => {
    setTimeout(() => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
    }, 300);
  };

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    if (title !== '') {
      this.setState({ todos: [...this.state.todos, newTodo] });
    } else {
      // TODO: INFORM USER
      console.log('empty title');
    }
  };

  getDate = () => {
    return dateFns.format(new Date(), 'D MMMM YYYY');
  };

  render() {
    return (
      <AppComponent>
        <GlobalStyle />
        <Wrapper>
          <TodoWrapper>
            <Header>
              <h1>Today</h1>
              <SDate>{this.getDate()}</SDate>
            </Header>
            <Category>Todo</Category>
            <TodosContainer>
              <Todos
                todos={this.state.todos}
                toggleComplete={this.toggleComplete}
                delTodo={this.delTodo}
              />
            </TodosContainer>
            <AddTodo addTodo={this.addTodo} />
          </TodoWrapper>
        </Wrapper>
      </AppComponent>
    );
  }
}

export default App;
