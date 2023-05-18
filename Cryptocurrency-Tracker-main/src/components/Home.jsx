import React from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import '../App'

function Home({news,setNews}) {
  

  
   	 
  return (
    <div>
      <Wrapper>
        <h1>Latest News</h1>
        <Splided options={{
         
          perPage:3,
          rewind: true,
          focus  : 'center',
          type     : 'loop',
          pagination:false,
          drag:'free',
          gap:"4rem"
        }}>{news.map((item)=>{
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
    </div>
  )
}
const Wrapper = styled.div`
margin: 4rem;

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

export default Home