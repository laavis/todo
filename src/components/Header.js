import React, { Component } from 'react';
import styled from 'styled-components';

const AppHeader = styled.div`
  height: 3rem;
  background: #2FC284;
  width: 100%;
`;

class Header extends Component {
  render() {
    return <AppHeader/>
  }
};

export default Header;