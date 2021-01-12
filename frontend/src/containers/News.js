import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios'; 
import Header from '../components/Header'


export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetichData() {
      const response = await axios(
        "http://192.168.20.34:8000/api/entradas"
        )
      setNews(response.data);
    }

    fetichData();
  }, []);


  return (
    <div>
      <Header/>
      {news.map((data) => (
        <PostCard key={data.title} author={data.author} title={data.title} body={data.body} news={true}/>
      )
    )}
    </div>
  )
}
