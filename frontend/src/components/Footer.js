import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();

  const [value, setValue] = useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} color="primary">
      <BottomNavigationAction label="Inicio" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Noticias" value="news" icon={<AnnouncementIcon />} />
      <BottomNavigationAction label="Nuestro Colegio" value="info" icon={<SchoolIcon />} />
      <BottomNavigationAction label="Galería" value="gallery" icon={<PermMediaIcon />} />
      <BottomNavigationAction label="Calendario" value="calendar" icon={<DateRangeIcon />} />
    </BottomNavigation>
  );
}