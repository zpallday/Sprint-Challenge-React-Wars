import React from 'react';



function StarWarsCharacters(props) {
    console.log(props);
    return (
        <div>
           
                <h2> Name:  {props.name}</h2>
                <p>Birthyear: {props.birthyear}</p>
                <p>Mass: {props.mass}</p>


         
        </div>



    )
}

export default StarWarsCharacters;