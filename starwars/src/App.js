import React, { useState, useEffect } from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  useEffect(() => {
      axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log('Data is not fetching from the Star Wars API', error);
      })
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="card-wrapper">
        {people.map((data, i) => (
    <StarWarsCharacters key={i}
          name={data.name}
          birthyear={data.birth_year}
          mass={data.mass}
          height={data.height} />
        ))}
      </div>
      <p className="footer">*The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</p>
    </div>
  );
}

export default App;
