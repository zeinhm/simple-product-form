import React from 'react';
import PropTypes from 'prop-types';
import AppContextProvider from './context'
import PageBase from './main'
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppContextProvider>
        <PageBase>
          <Switch>
            <Route component={pages.AddProduct} />
          </Switch>
        </PageBase>
      </AppContextProvider>
    </Router>
  </Provider>
);

export default App;

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
