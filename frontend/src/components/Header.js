import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CardMedia,
} from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  media: {
    height: "100%",
    marginBottom: 10
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container>
      <CardMedia
        component="img" 
        className={classes.media}
        image="https://colegioparroquialandacollo.cl/wp-content/uploads/2020/09/cropped-Logo-CPA-Right-nuevo.png"
      />
      
    </Grid>
  );
}
