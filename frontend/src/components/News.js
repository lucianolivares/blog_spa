import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import axios from 'axios'; 
import Header from './Header'


export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setNews(data);
      });
  }, []);


  return (
    <div>
      <Header/>
      {news.map((data) => (
        <PostCard author={data.author} title={data.title} body={data.body} news={true}/>
      )
    )}
    </div>
  )
}
