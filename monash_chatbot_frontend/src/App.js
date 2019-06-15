import React, { useState } from 'react';
import Nav from './nav';
import Chat from './chatwindow';

function App() {
  const [navStatus, setNav] = useState(false);
  const navProps = {
    navStatus,
    setNav,
  };
  return (
    <div className="app">
      <Nav {...navProps} />
      <div>
        <Chat />
      </div>
    </div>
  );
}

export default App;