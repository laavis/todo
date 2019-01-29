import React, { Component } from 'react';
import styled from 'styled-components';

const AppSidebar = styled.div`
  flex: 1;
  z-index: 1;
  max-width: 20rem;
  height: 100vh;
  background: #C2BAB6;
`;

class Sidebar extends Component {
  render() {
    return <AppSidebar />
  }
};

export default Sidebar;