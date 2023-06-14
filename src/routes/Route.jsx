import React from 'react';
import { Route as ReactDOMRoute } from 'react-router-dom';

import DefaultTemplate from '../components/Templates/DefaultTemplate';

const Route = ({ component: Component, ...rest }) => (
  <ReactDOMRoute
    {...rest}
    render={() => (
      <DefaultTemplate>
        <Component />
      </DefaultTemplate>
    )}
  />
);

export default Route;
