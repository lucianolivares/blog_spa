import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useHistory } from 'react-router-dom';
import { yellow } from '@material-ui/core/colors'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#000094"
  },
  actionButton: {
    color: "white",
  }
};

function BottomBar(props) {
  const { classes } = props
  const history = useHistory();
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  useEffect(() => {
    setValue(value)
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
    history.push(newValue)
  };

  return (
    <BottomNavigation position="sticky" value={value} onChange={handleChange} className={classes.root} >
      <BottomNavigationAction 
        showLabel
        className={classes.actionButton}
        label="Inicio" 
        value="/" 
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        showLabel
        className={classes.actionButton}
        label="Noticias"
        value="/news"
        icon={<AnnouncementIcon />}
      />
      <BottomNavigationAction 
        showLabel
        className={classes.actionButton}
        label="Nuestro Colegio" 
        value="/about" 
        icon={<SchoolIcon />} 
      />
      <BottomNavigationAction 
        showLabel
        className={classes.actionButton}
        label="Galería"
        value="/gallery" 
        icon={<PermMediaIcon />} 
      />
      <BottomNavigationAction 
        showLabel
        className={classes.actionButton}
        label="Calendario" 
        value="/calendar" 
        icon={<DateRangeIcon />} 
      />
    </BottomNavigation>
  );
}

export default withStyles(styles)(BottomBar);