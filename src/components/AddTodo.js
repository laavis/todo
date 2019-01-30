import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import AddBtn from './OpenAddTodoBtn';

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
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 1.5rem;
  width: calc(100% - 3rem);
  height: 3rem;
  padding: .875rem;
  color: #5F5F5F;
  border-radius: 2px;
  background-color: #FEFEFE;
  box-shadow: 4px 4px 10px rgba(73, 60, 53, 0.15);
  transform: scale(0,0);

  &.animate {
    animation: ${openForm} .25s ease-in forwards;
    transform-origin: right;
  }
`;

const Input = styled.input`
  color: #5F5F5F;
  border: none;
  border-bottom: 1px solid #E0DCDA;
  font-size: 1rem;
  background-color: transparent;
  width: 100%;

  ::placeholder {
    font-weight: 800;
  }

  :focus {
    outline: none;
    margin-bottom: -1px;
  }
`;

const AddTodoBtn = styled.button`
  margin-left: .875rem; 
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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <AddBtn onClick={ this.setClass }/>
        <Form
          className={this.state.animate ? 'animate' : ''}
          onSubmit={ this.onSubmit }
        >
          <Input
            type="text"
            name="title"
            placeholder="Add todo..."
            value={ this.state.title }
            onChange={ this.onChange }
          />
          <AddTodoBtn type="submit">ADD</AddTodoBtn>
        </Form>
      </div>

    );
  }
};

export default AddTodo;