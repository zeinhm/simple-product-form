import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext(null);

export default function AppContextProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const appValue = {
    breadcrumbs,
    setBreadcrumbs,
  };
  return (
    <AppContext.Provider value={appValue}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.defaultProps = {
  children: null,
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
