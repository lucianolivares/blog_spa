import React from 'react'
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from "./components/App";
import theme from './theme';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>

  </React.StrictMode>,
  rootElement
);