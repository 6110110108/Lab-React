import React from 'react';
import './App.css';


const word = "Hello";
function App() {
  return (
    <div className="App">
        {
          
          <WordCard value={word}/>
        } 
    </div>
  );
}

export default App;
