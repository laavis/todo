import React, { Component } from 'react';
import styled from 'styled-components';

import addIcon from '../img/ic_add-todo.svg';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
  margin-bottom: 6px;
  position: relative;
  padding: 0 1rem;
  color: #5F5F5F;
  background-color: #fff;
  border-radius: 2px;
  border-bottom: 1px solid #D0D0D0;
  box-shadow: 0px 0px 4px rgba(0,0,0,.2);

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    margin-right: 1rem;
    background-image: url(${addIcon});
  }
`;

const AddBtn = styled.div`
  margin-left: 1rem;
  font-size: .875rem;
  color: blue;
  opacity: 1;
`;


const Input = styled.input`
  color: #5F5F5F;
  border: none;
  font-size: 1rem;
  background-color: transparent;
  width: 100%;

  ::placeholder {
    font-weight: 800;
  }

  :focus {
    outline: none;
    margin-bottom: -1px;
    border-bottom: 1px solid #F2F2F2;
  }
`;

export class AddTodo extends Component {
  render() {
    return (
      <Form>
        <Input type="text" name="title" placeholder="Add Todo" />
        <AddBtn>ADD</AddBtn>
      </Form>
    );
  }
};

export default AddTodo;