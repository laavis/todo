import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const CheckboxContainer = styled.div`
  padding: 0;
  margin-right: 0.75rem;
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
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
    stroke-dashoffset: 10;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const Checkmark = styled.path`
  fill: none;
  stroke: #c2bab6;
  stroke-width: 2;
  stroke-dashoffset: 10;

  ${props =>
    props.checked &&
    css`
      animation: ${checkmark} 0.4s linear forwards;
    `}
`;

const Box = styled.rect`
  width: 15px;
  height: 15px;
  stroke: #c2bab6;
`;

const CheckboxSvg = styled.svg`
  ${Checkmark} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxComponent = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <CheckboxSvg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      checked={checked}
    >
      <Box x="0.5" y="0.5" />
      <Checkmark d="M5 7.5L7.5 10L12 5.5" checked={checked} />
    </CheckboxSvg>
  </CheckboxContainer>
);

export default class Checkbox extends Component {
  render() {
    return (
      <CheckboxComponent
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}
