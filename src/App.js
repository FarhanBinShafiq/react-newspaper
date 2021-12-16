
import React,{ useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import News from './components/News/News';

function App() {
  
  const [news,setNews]=useState([]);

  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-16&sortBy=publishedAt&apiKey=96ff0b7151c1457cbacb151800381c71')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])

  return (
    <div className="App">

{
  news.length===0 ? <Spinner animation="border" variant="success" /> :




  <Row xs={1} md={3} className="g-4">
  {
     news.map(nw=><News news={nw} ></News>)
  }
</Row>


}

</div>

     
  );
}

export default App;
