import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios'; 
import { GridList, Grid } from "@material-ui/core";
import PostCard from './PostCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entradas: []
    };
  }

  componentDidMount() {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          entradas: data
        });
      });
  }


  render() {
    return (
      <GridList container className="center" style={{width:500, height:500}}>
        <Grid item xs={12}>
          {this.state.entradas.map((post) => (
            <PostCard author={post.author} title={post.title} body={post.body} />
          ))}
        </Grid>
      </GridList>
    )
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);