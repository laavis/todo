import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import DeleteBtn from './DeleteBtn';

const animateOut = keyframes`
  0% { transform: scale3d(1,1,1); }
  30% { transform: scale3d(1.01, 1.05, 1); }
  100% { transform: scale3d(0,0,0); }
`;

const TodoComponent = styled.div`
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

  &.animate { animation: ${animateOut} .3s ease-in forwards; }
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
  border-radius: 1px;
  border: ${props => props.checked ? 'none' : '1px solid #D0D0D0'};
  background: ${props => props.checked ? '#2FC284' : 'none'};
  transition: all .2s;
  ${Checkmark} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  };
`;

const CheckboxContainer = styled.div`
  padding: 0;
  margin-right: 1rem;
  display: flex;
  border: none;
  background: none;
`;

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={ checked } { ...props }/>
    <StyledCheckbox checked={checked}>
      <CheckIcon viewBox="0 0 20 24">
        <Checkmark d="M3 12L8.5 17.5L24 2" checked={checked} />
      </CheckIcon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const TodoTitle = styled.div`
  position: relative;
  padding: 0 .3rem;
`;

const line = keyframes`
  from { width: 0; }
  to { width: 100% }
`;

const Linethrough = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  display: ${props => props.checked ? 'inline' : 'none'};
  animation: ${line} .2s ease-out;
`;

export class TodoItem extends Component {

  state = { checked: false };

  checkboxChange = e => {
    this.setState({ checked: e.target.checked });
    console.log(e.target.checked);
    this.props.toggleComplete(this.props.todo.id);
  }

  getLineStyle = () => {
    return {
      strokeWidth: '1px',
      stroke: '#5F5F5F'
    }
  };

  // Toggle line-through
  getStyle = () => {
    return {
      display: this.props.todo.completed ? 'inline' : 'none'
    }
  };

  animateOut = () => {
    return {
      backgroundColor: 'palevioletred'
    }
  };

  stuff = () => {
    this.animateOut();
    this.setState({ animate: true });
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <TodoComponent className={ this.state.animate ? 'animate' : '' }>
        <label>
          <Checkbox checked={this.state.checked} onChange={this.checkboxChange} />
        </label>
        <TodoTitle>
          {title}
          <Linethrough style={this.getStyle()} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 55 L 100 55" style={this.getLineStyle()} vectorEffect="non-scaling-stroke"></path>
          </Linethrough>
        </TodoTitle>
        <DeleteBtn onClick={() => { this.props.delTodo(id); this.stuff(); }}/>
      </TodoComponent>
    );
  }
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
