import React from 'react';
import { Grid } from '@material-ui/core'
import BottomBar from '../components/BottomBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingBottom: 70
  }
});
export default function CustomLayout(props) {
  const classes = useStyles()
  return (
    <Grid item container>
      <Grid item xs={false} sm={1} className={classes.root}/>
      
        <Grid item xs={12} sm={10} className={classes.root}>
          {props.children}
       </Grid>
        
      <Grid item xs={false} sm={1} className={classes.root}/>


      <BottomBar />

    </Grid>
  )
}
