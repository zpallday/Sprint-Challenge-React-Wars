import React, { useState, useEffect} from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';
import axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [characters, setCharacters] = useState([]);
useEffect(() => {
  axios.get('https://swapi.co/api/people/1/')
  .then(res => {
    console.log(res.data.results);
    setCharacters(res.data.results);
  });
}, []);




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>{
      characters.map(data => (
        <StarWarsCharacters name={data.name}
        birthyear={data.birth_year}
        mass={data.mass} />
      ))}
    </div>
  );
}

export default App;
