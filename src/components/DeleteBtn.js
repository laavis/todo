import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  position: absolute;
  right: 1rem;
  opacity: 1;
  transition: all .1s linear;
`;

const Lid = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
`;

export default class DeleteBtn extends Component {
  render() {
    return (
      <Container onClick={ this.props.onClick }>
        <svg width="16" height="16" fill="none">
          <Lid d="M5 1.5C5 1.22386 5.22386 1 5.5 1H8.5C8.77614 1 9 1.22386 9 1.5V2.5H5V1.5ZM4 2.5V1.5C4 0.671573 4.67157 0 5.5 0H8.5C9.32843 0 10 0.671573 10 1.5V2.5H13.5V3.5H0.5V2.5H4Z" fill="#C64444" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5V13C2 13.8284 2.67157 14.5 3.5 14.5H10.5C11.3284 14.5 12 13.8284 12 13V3.5H11V13C11 13.2761 10.7761 13.5 10.5 13.5H3.5C3.22386 13.5 3 13.2761 3 13V3.5H2ZM5 6.5V10.5H6V6.5H5ZM8 6.5V10.5H9V6.5H8Z" fill="#C64444" />
        </svg>
      </Container>
    );
  }
};
