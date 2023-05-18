import React,{useState} from 'react';
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';


function Headlines() {
    const[headlines,setHeadlines]=useState([]);
  
    async function getData() {
        const response = await fetch('https://newsapi.org/v2/top-headlines?pageSize=10&sources=bbc-news&apiKey=7ce9907d1dfd45679b279d1e51b7f3dd');
                 const data = await response.json();
                 console.log(data)
                 setHeadlines(data.articles);
           
              }
              getData()
  return (
    <Wrapper>
    <h1>Headlines</h1>
    <Splided options={{
     
      perPage:6,
      rewind: true,
      focus  : 'center',
      type     : 'loop',
      pagination:false,
      drag:'free',
      gap:"1rem"
    }}>{headlines.map((item)=>{
  return(
      <SplideSlide >
        <h3 key={item.id}>{item.title}</h3>
      <Card >
    
    <p>{item.description}</p>
    <img src={item.urlToImage} alt={item.title} />
    <Gradient />
    </Card>
    </SplideSlide>
    
  )}
)}
</Splided>
</Wrapper>
  )
}
const Wrapper = styled.div`
margin: 4rem;
display:flex;
flex-direction:column;
div{
    display:flex;
    justify-content:center;
}

`;
const Splided = styled(Splide)`
cursor:pointer;

`;
const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
display:flex;
flex-direction:column;
position:relative;
height:100px;
  width:350px;

img{
  position:absolute;
  left:0;
  object-fit:cover;
  height:400px;
  width:350px;
  
  border-radius:2rem;
}
h3{
  position:absolute;
  z-index:7;

}

p{
  position :absolute;
  z-index:10;
  left:50%;
  bottom:-8%;
  transform:translate(-50%,0%);
  width:100%;
  color:white;
  text-align:center;
  font-weight:600;
  height:40%;
  display:flex;
  justify-content:center
}
`

const Gradient =styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`
export default Headlines