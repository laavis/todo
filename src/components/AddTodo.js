import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;

  @media (max-width: 500px) {
    width: calc(100% - 2rem);
    bottom: 1rem;
  }
`;

const openForm = keyframes`
  0% {
    transform: scale(0,1);
  }
  100% {
    transform: scale(1,1);
  }
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  padding: 0.875rem 0 0.875rem 0.875rem;
  color: #5f5f5f;
  border-radius: 2px;
  background-color: #fefefe;
  box-shadow: 4px 4px 10px rgba(73, 60, 53, 0.15);
  overflow: hidden;

  &.animate {
    animation: ${openForm} 0.25s ease-in forwards;
    transform-origin: right;
  }
`;

const Input = styled.input`
  color: #5f5f5f;
  border: none;
  border-bottom: 1px solid #e0dcda;
  font-size: 1rem;
  background-color: transparent;
  width: 100%;

  ::placeholder {
    font-family: 'Frank Ruhl Libre', serif;
  }

  :focus {
    outline: none;
    margin-bottom: -1px;
  }
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 6rem;
  height: 3rem;
  margin-left: 1rem;
  background-color: #c2bab6;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  color: #5b504b;
  transition: all 0.2s ease;

  &:hover {
    background-color: #a8a09c;
  }
`;

export class AddTodo extends Component {
  state = {
    title: '',
    animate: false
  };

  setClass = () => {
    this.setState({ animate: true });
    console.log('animate');
  };

  toggleFocus = () => {
    this.input.focus();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Container>
        <Form
          className={this.state.animate ? 'animate' : ''}
          onSubmit={this.onSubmit}
        >
          <Input
            type="text"
            name="title"
            placeholder="Add todo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <AddButton type="submit">
            <p>ADD</p>
          </AddButton>
        </Form>
      </Container>
    );
  }
}

export default AddTodo;
