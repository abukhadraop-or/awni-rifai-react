import React from 'react';
import GlobalStyle from 'global-styles';
import Sidebar from 'components/Sidebar/Sidebar';
import Table from 'components/Table/Table';


function App() {
  return (
    <>
      <GlobalStyle />
     <Sidebar/>
     <Table/>
    </>
  );
}

export default App;
