import React from 'react';
import PropTypes from 'prop-types';

export default function PageBase({ children }) {
  return (
    <>
      {children}
    </>
  );
}

PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};
