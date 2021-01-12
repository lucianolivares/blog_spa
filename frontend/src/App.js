import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import BottomBar from './components/BottomBar';
import CustomLayout from './containers/CustomLayout';
import BaseRouter from './routes';



export default function App() {

  return  (
    <Router>

      <CustomLayout>
        <BaseRouter />
      </CustomLayout>

      <BottomBar />
    </Router>
  )
}
