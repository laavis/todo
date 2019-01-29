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

const AddBtn = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  position:absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  border-radius: 100%;
  background-color: #FEFEFE;
  box-shadow: 4px 4px 10px rgba(73, 60, 53, 0.15);

    &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-image: url(${addIcon});
  }
`;

export class AddTodo extends Component {
  render() {
    return (
      <AddBtn />
    );
  }
};

export default AddTodo;