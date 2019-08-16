import React, { useState, useEffect } from 'react';
import './App.scss';
import StarWarsPeople from './components/StarWarsCharacters';
import axios from 'axios';
// import styled from 'styled-components';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  useEffect(() => {
      axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch(error => {
        console.log('Data is not fetching from the Star Wars API (SWAPI)', error);
      })
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="card-wrapper">
        {people.map((data, i) => (
          <StarWarsPeople key={i}
           name={data.name}
           birthyear={data.birth_year}
           mass={data.mass}
           height={data.height} />
        ))}
      </div>
      <p className="footer">*The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</p>
    </div>
  );
}

export default App;