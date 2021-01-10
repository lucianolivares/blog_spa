import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();
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
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} color="primary">
      <BottomNavigationAction 
        label="Inicio" 
        value="/" 
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        label="Noticias"
        value="/news"
        icon={<AnnouncementIcon />}
      />
      <BottomNavigationAction 
        label="Nuestro Colegio" 
        value="/about" 
        icon={<SchoolIcon />} 
      />
      <BottomNavigationAction 
        label="Galería"
        value="/gallery" 
        icon={<PermMediaIcon />} 
      />
      <BottomNavigationAction 
        label="Calendario" 
        value="/calendar" 
        icon={<DateRangeIcon />} 
      />
    </BottomNavigation>
  );
}