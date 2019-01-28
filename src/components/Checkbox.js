import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const CheckboxContainer = styled.div`
  padding: 0;
  margin-right: 1rem;
  display: flex;
  border: none;
  background: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const checkmark = keyframes`
  from {
    stroke-dashoffset: 150;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const CheckIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

const Checkmark = styled.path`
  fill: none;
  stroke: #fff;
  stroke-width: 4;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;

  ${props => props.checked && css`
    animation: ${checkmark} .4s linear forwards;
  `}
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border-radius: 1px;
  border: ${props => props.checked ? 'none' : '2px solid #D0D0D0'};
  background: ${props => props.checked ? '#2FC284' : 'none'};
  transition: all .2s;
  ${Checkmark} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  };
`;

const CheckboxComponent = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <CheckIcon viewBox="0 0 20 24">
        <Checkmark d="M3 12L8.5 17.5L24 2" checked={checked} />
      </CheckIcon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default class Checkbox extends Component {
  render() {
    return (
      <CheckboxComponent checked={ this.props.checked } onChange={ this.props.onChange }/>
    );
  }
};
