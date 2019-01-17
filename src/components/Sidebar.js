import React, { Component } from 'react';
import styled from 'styled-components';

const AppSidebar = styled.div`
  flex: 1;
  z-index: 1;
  max-width: 20rem;
  height: calc(100vh - 3rem);
  background: #464646;
  box-shadow: 0px 0px 4px rgba(0,0,0,.25);
`;

class Sidebar extends Component {
  render() {
    return <AppSidebar />
  }
};

export default Sidebar;