import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  30% { transform: rotate(-20deg); }
  100% {transform: rotate(180deg); }
`;

const Crossmark = styled.path`
  stroke: #E44545;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const Container = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  border: none;
  background: none;
  position: absolute;
  right: 1rem;
  opacity: 1;
  cursor: pointer;
  transition: all .1s linear;

  :hover {
     ${Crossmark} {
       animation: ${spin} .3s ease-in forwards;
       transform-origin: 9px 9px;
     }
  }
`;

export default class DeleteBtn extends Component {
  render() {
    return (
      <Container onClick={ this.props.onClick }>
        <svg width="18" height="18" fill="none">
          <Crossmark d="M6.3 6.3l5.4 5.4M11.7 6.3l-5.4 5.4" />
          <mask id="a" fill="#fff"><rect width="18" height="18" rx="1" /></mask>
          <rect width="18" height="18" rx="1" stroke="#E44545" strokeWidth="4" mask="url(#a)" />
        </svg>
      </Container>
    );
  }
};
