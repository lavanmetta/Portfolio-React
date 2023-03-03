import React from "react";
import Main from './components/Main/main.jsx'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
     <BrowserRouter>
       <Main/>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
