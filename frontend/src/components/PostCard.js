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
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: props => {
    return {
      marginBottom: props.news ? 40 : 10,
    };
  },
  media: {
    height: 140,
    marginBottom:20
  },
});


export default function PostCard(props) {
  const classes = useStyles(props);

  const [favorite, setFavorite] = useState(false)
  const [liked, setLiked] = useState(false)

  const link = "../detail/" + props.title

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={link}>
        <CardContent>
          <CardMedia
            className={classes.media}
            image="https://dummyimage.com/600x400/000/fff"
          />
          <Typography className={classes.title} variant="h4" component="h4">
            {props.title}
          </Typography>
          <Typography color="textSecondary">
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
          ) : (
            <FavoriteBorderOutLinedIcon />
          )}
        </IconButton>

        <IconButton onClick={() => {
          liked ? setLiked(false) : setLiked(true)
        }}
        >
          { liked ? (
            <ThumbUpAltIcon />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )}
        </IconButton>

      </CardActions>
    </Card>
  );

}

