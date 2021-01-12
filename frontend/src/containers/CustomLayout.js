import React from 'react';
import { Grid } from '@material-ui/core'

export default function CustomLayout(props) {
  return (
    <Grid item container>
      <Grid item xs={false} sm={1} />
      
        <Grid item xs={12} sm={10}>
          {props.children}
       </Grid>
        
      <Grid item xs={false} sm={1} />
    </Grid>
  )
}
