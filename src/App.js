import React from 'react';
import './App.css';
import WordCard from './WordCard';

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

/*import React from 'react';
import './App.css';
//import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
//const word = "Hello";
function App() {
  return (
    <div>
      <CharacterCard/>
    </div>
  );
}
export default App;*/
