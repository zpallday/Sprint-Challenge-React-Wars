import React from 'react';
// import Styled from 'styled-components';
import './StarWars.scss';
import { Card } from 'semantic-ui-react';




function StarWarsCharacters(props) {
    console.log(props);
    return (
        // <WrapperDiv>
           <Card className ='person-card'>
                <Card.Header className='name'>Name: {props.name}</Card.Header>
                <Card.Meta>Birthyear: {props.birthyear}</Card.Meta>
                <Card.Description className='stats'> Mass: {props.mass} kg <br /> Height: {props.height} cm </Card.Description>
                </Card>

    



    )
}

export default StarWarsCharacters;