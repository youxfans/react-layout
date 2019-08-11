import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './layout/Main';

export default () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}