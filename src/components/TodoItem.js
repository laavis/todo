import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import DeleteBtn from './DeleteBtn';
import Checkbox from './Checkbox';

const deleteTodo = keyframes`
  0% { transform: scale(1,1); }
  100% { transform: scale(0,1); }
`;

const TodoComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  padding: 0.875rem;
  position: relative;
  transform-origin: right;
  border-bottom: 1px solid #e0dcda;

  &.animate {
    animation: ${deleteTodo} 0.25s ease-in forwards;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    .trash {
      opacity: 1;
    }
  }
`;

const TodoTitle = styled.div`
  position: relative;
  padding: 0 0.3rem;
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
  display: ${props => (props.checked ? 'inline' : 'none')};
  animation: ${line} 0.2s ease-out;
`;

export class TodoItem extends Component {
  state = {
    checked: false
  };

  checkboxChange = e => {
    this.setState({ checked: e.target.checked });
    console.log(e.target.checked);
    this.props.toggleComplete(this.props.todo.id);
  };

  getLineStyle = () => {
    return {
      strokeWidth: '.1rem',
      stroke: '#5F5F5F'
    };
  };

  // Toggle line-through
  getStyle = () => {
    return {
      display: this.props.todo.completed ? 'inline' : 'none'
    };
  };

  setClass = () => {
    this.setState({ animate: true });
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <TodoComponent
        onMouseEnter={this.mouseEnter}
        className={this.state.animate ? 'animate' : ''}
      >
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.checkboxChange}
          />
        </label>
        <TodoTitle>
          {title}
          <Linethrough
            style={this.getStyle()}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 55 L 100 55"
              style={this.getLineStyle()}
              vectorEffect="non-scaling-stroke"
            />
          </Linethrough>
        </TodoTitle>
        <DeleteBtn
          onClick={() => {
            this.props.delTodo(id);
            this.setClass();
          }}
        />
      </TodoComponent>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
