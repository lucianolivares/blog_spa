import React, { Component, Fragment} from "react";
import { render } from "react-dom";
import axios from 'axios'; 
import { ListItemText, ListItem, Typography } from "@material-ui/core";


export default class Post extends Component {
  static defaultProps = {
    author: "",
    title: "",
    body: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      author:  this.props.author,
      title: this.props.title,
      body: this.props.body,
    };

  }


  render() {
    return (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={this.state.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {this.state.author}
              </Typography>
              {this.state.body}
            </React.Fragment>
          }
        />
      </ListItem>
    )
  }
}
