import styled from 'styled-components';
import img from '../../images/cadastro.jpg';

export const FinalContainer=styled.div` 
display:flex;
flex-direction:column;
align-items: center;
text-align: center;
height: 100vh;
background-image:url('${img}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
font-family: 'Roboto Condensed', sans-serif;
`

export const Container=styled.div` 
width: 100vw;
height: 80vh;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
export const Button=styled.button`
height: 1.5rem;
border: 1.5px solid #000;
background: #ddd;
margin:0 10px;
color: #000;
border-radius: .25rem .25rem .25rem .25rem;
&: hover{font-weight: 700;
cursor:grab}
`
