import Home from './components/Home'
import './App.css';
import { useState} from 'react';
import Headlines from './components/Headlines';

function App() {
  const [news,setNews] = useState([]);
  async function getData() {
    const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-06-05&sortBy=popularity&apiKey=7ce9907d1dfd45679b279d1e51b7f3dd');
             const data = await response.json();
             
       setNews(data.articles);
       
          }
          getData()
      
  return (
    <div className="App">
    {/* <Headlines news={news}/> */}
      <Home news={news} setNews={setNews}/>
   
    </div>
  );
}

export default App;
