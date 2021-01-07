import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar,
  Typography, 
  IconButton
} from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1
  },
  iconStyles: {
    color: "#fff"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Typography className={classes.typographyStyles} variant="h6">
        This is an AppBar
      </Typography>
      <IconButton className={classes.iconStyles} >
        <AddCircleIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)};

export default Header;
