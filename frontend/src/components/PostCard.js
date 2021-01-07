import React, { Component, Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    backgroundColor: "gray",
    marginBottom: 40
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



export default function PostCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}color="textSecondary" gutterBottom>
          Epigrafo
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.author}
        </Typography>
        <Typography variant="body2" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
  </Card>
  )
}
