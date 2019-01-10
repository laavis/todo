import React, { Component } from 'react';
import styled from 'styled-components';

const AppSidebar = styled.div`
  flex: 1;
  height: 3rem;
  background: pink;
`;

class Sidebar extends Component {
  render() {
    return <AppSidebar />
  }
};

export default Sidebar;