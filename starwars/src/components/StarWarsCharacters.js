import React from 'react';
import Styled from 'styled-components';


const WrapperDiv = Styled.div`
  color: #ffaa80;
  margin: 10px 30px 10px 30px;
  text-align: left;
  background: #ffe6b3;
  font-family: "Kaushan", cursive;
  margin-right: 40%;
`
// const Cards = Styled.p`
//     display: flex;
//     margin: 20px 0 70px 0;
// `
// const Title = Styled.h2`
//     display: flex;
//     align-items: center;
//     width: 23%;
//     margin: 5px;
//     font-size: 2.2rem;
// `
// const Descrip = Styled.p`
//     color: #0C0100;
//     width: 75%;
//     padding: 10px;
//     margin: 5px;
//     font-size: 1.5rem;
//     border-left: solid 1px #ddab52;
//     font-family: "Courgette", cursive;
// `


function StarWarsCharacters(props) {
    console.log(props);
    return (
        <WrapperDiv>
                  {/* <Cards> */}
                <h2> Name:  {props.name}</h2>
                <p>Birthyear: {props.birthyear}</p>
                <p>Mass: {props.mass}</p>
                {/* </Cards> */}

         
        </WrapperDiv>



    )
}

export default StarWarsCharacters;