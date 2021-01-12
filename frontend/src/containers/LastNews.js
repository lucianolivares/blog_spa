import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { 
  Card,
  CardMedia,
  CardActionArea,
  Typography, 
  CardContent
} from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles({
  media: {
    height: 140,
    marginBottom:20
  },
  typografyClass: {
    position: 'absolute',
    color: 'white',
    top: 110,
    left: '20%',
    transform: 'translateX(-20%)'
  }
});

export default function LastNews() {
  const classes = useStyles();
  const [lastNews, setLastNews] = useState([]);
  const link = "http://192.168.20.34:8000/api/last_news"

  useEffect(() => {
    async function fetichData() {
      const response = await axios.get(
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

  function renderCard(entrada) {
    return (
      <Card>
        <CardActionArea component={Link} >
          <CardContent>
              <CardMedia 
                className={classes.media}
                image="https://dummyimage.com/600x400/000/fff" 
                />
              <Typography 
                className={classes.typografyClass}
                variant="h4">
                {entrada.title}
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <div>
      <Header/>
      <Carousel>
        {
          lastNews.map( (entrada) => renderCard(entrada))
        }
      </Carousel>
    </div>
  )
}

