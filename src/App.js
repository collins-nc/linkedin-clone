import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from './Register';
import Main from './Main';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;