import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { 
  Typography 
} from '@material-ui/core';
import Header from '../components/Header';


export default function LastNews() {
  const [lastNews, setLastNews] = useState([]);
  const link = "http://192.168.20.34:8000/api/entradas"

  useEffect(() => {
    async function fetichData() {
      const response = await axios(
        link
        )
      setLastNews(response.data);
    }
    fetichData();
    console.log("fetching")
    return () => {
      setLastNews([])
    };
  }, []);

  return (
    <div>
      <Header/>
      <Carousel>
        {
          lastNews.map( (entrada) => <Typography key={entrada.title} variant="h1">{entrada.title}</Typography>)
        }
      </Carousel>
    </div>
  )
}

