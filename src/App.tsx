import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import About from './containers/About/About.tsx';
import ToolBar from './components/ToolBar/ToolBar.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';


const App: React.FC = () => {
  return (
    <>
      <ToolBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    </>

  );
};

export default App;