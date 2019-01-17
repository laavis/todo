import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoComponent = styled.div`
  display: flex;
  height: 52px;
  align-items: center;
  margin-bottom: 6px;
  padding: 0 1rem;
  color: #5F5F5F;
  background-color: #fff;
  border-radius: 2px; /* check later */
  border-bottom: 1px solid #D0D0D0;
  box-shadow: 0px 0px 4px rgba(0,0,0,.1);
`;

const DeleteBtn = styled.button`
  background: pink;
`;

export class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <TodoComponent style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}
          
        </p>
      </TodoComponent>
    );
  }
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
