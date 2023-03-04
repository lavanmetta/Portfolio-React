import React from "react";
import Main from './components/Main/main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Journey from "./components/Journey/journey.jsx";

function App() {
  return (
    <React.Fragment>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/journey" element={<Journey/>} />
       </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
