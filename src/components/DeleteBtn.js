import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const lidTransform = keyframes`
  from { transform: rotate(); }
  to { transform: rotate(-15deg); }
`;
const lidTransform2 = keyframes`
  from { transform: rotate(-15deg); }
  to { transform: rotate(0); }
`;

const Lid = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  transform-origin: 8px 8px;
  animation: ${lidTransform2} 0.15s ease-in forwards;
`;

const Container = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  transition: all 0.1s linear;
  opacity: 0;

  transition: opacity 0.5s ease forwards;

  &:hover {
    ${Lid} {
      animation: ${lidTransform} 0.15s ease-out forwards;
    }
  }
`;

export default class DeleteBtn extends Component {
  render() {
    return (
      <Container className="trash" onClick={this.props.onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Lid
            d="M10 6.5C10 6.22386 10.2239 6 10.5 6H13.5C13.7761 6 14 6.22386 14 6.5V7.5H10V6.5ZM9 7.5V6.5C9 5.67157 9.67157 5 10.5 5H13.5C14.3284 5 15 5.67157 15 6.5V7.5H18.5V8.5H5.5V7.5H9Z"
            fill="#C64444"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 8.5V18C7 18.8284 7.67157 19.5 8.5 19.5H15.5C16.3284 19.5 17 18.8284 17 18V8.5H16V18C16 18.2761 15.7761 18.5 15.5 18.5H8.5C8.22386 18.5 8 18.2761 8 18V8.5H7ZM10 11.5V15.5H11V11.5H10ZM13 11.5V15.5H14V11.5H13Z"
            fill="#C64444"
          />
        </svg>
      </Container>
    );
  }
}
