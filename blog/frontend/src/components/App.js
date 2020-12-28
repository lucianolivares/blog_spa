import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios'; 
import { GridList} from "@material-ui/core";
import Post from './Post';

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
      <GridList>
        {this.state.entradas.map((post) => (
          <Post author={post.author} title={post.title} body={post.body} />
        ))}
      </GridList>
    )
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);