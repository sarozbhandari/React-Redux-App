import React from 'react';
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "container">
        <div className = "py-3">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
