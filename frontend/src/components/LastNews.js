import React, { useState, useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { 
  Grid,
  GridList,
  GridListTile,
  Card, 
  CardContent, 
  CardMedia, 
  Typography 
} from '@material-ui/core';
import Header from './Header';


export default function LastNews() {
  const [entradas, setEntrada] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setEntrada(data);
      });
  }, []);

  return (
    <div>
      <Header/>
      <Carousel>
        {
          entradas.map( (entrada) => <Typography variant="h1">{entrada.title}</Typography>)
        }
      </Carousel>
    </div>
  )
}

