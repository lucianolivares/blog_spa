import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { 
  Card,
  CardMedia,
  CardActionArea,
  Typography, 
  CardContent
} from '@material-ui/core';
import Header from '../components/Header';
import axiosInstance from '../axios';

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

  useEffect(() => {
    axiosInstance.get().then((res) => {
      setLastNews(res.data)
      console.log(res.data)
    })
	}, [setLastNews]);

  function renderCard(post) {
    return (
      <Card key={post.id}>
        <CardActionArea component={Link} to={`/detail/${post.slug}`}>
          <CardContent>
              <CardMedia 
                className={classes.media}
                image="https://source.unsplash.com/random" 
                />
              <Typography 
                className={classes.typografyClass}
                variant="h4">
                {post.title}
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
          lastNews.map( (post) => renderCard(post))
        }
      </Carousel>
    </div>
  )
}

