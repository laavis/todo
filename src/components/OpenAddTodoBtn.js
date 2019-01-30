import React, { Component } from 'react';
import styled from 'styled-components';

import addIcon from '../img/ic_add-todo.svg';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 24px;
  height: 24px;
  background-image: url(${addIcon});
  }
`;

export class AddBtn extends Component {
  render() {
    return (
      <Button onClick={ this.props.onClick }/>
    );
  }
};

export default AddBtn;