import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import addIcon from '../img/ic_add-todo.svg';

const hover = keyframes`
  0% { transform: scale(1); }
  50% {
    transform: scale(.95);
  }
  100% {
    transform: scale(1);
    box-shadow: 6px 7px 10px rgba(73, 60, 53, 0.15);
  }
`;

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

  &:hover {
    animation: ${hover} .2s cubic-bezier(.57,.21,.69,1.25) 1 forwards;
  }
`;

export class OpenAddTodoBtn extends Component {
  render() {
    return (
      <Button className="add-btn" onClick={ this.props.onClick }/>
    );
  }
};

export default OpenAddTodoBtn;