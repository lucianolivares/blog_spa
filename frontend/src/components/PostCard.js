import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutLinedIcon from '@material-ui/icons/FavoriteBorderOutlined'

const useStyles = makeStyles({
  root: {
    backgroundColor: "gray",
    marginBottom: 40,
  },
  media: {
    height: 140,
    marginBottom:20
  },

  pos: {
    marginBottom: 12,
  },
});


export default function PostCard(props) {
  const classes = useStyles();

  const [favorite, setFavorite] = useState(false)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            className={classes.media}
            image="https://dummyimage.com/600x400/000/fff"
            title="Contemplative Reptile"
          />
          <Typography className={classes.title} variant="h4" component="h4">
            {props.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={() => {
          favorite ? setFavorite(false) : setFavorite(true);
        }}
        >
          { favorite ? (
            <FavoriteIcon />    
          ): (
            <FavoriteBorderOutLinedIcon />
          )}
          
        </IconButton>
        <IconButton>
          <ThumbUpAltIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
