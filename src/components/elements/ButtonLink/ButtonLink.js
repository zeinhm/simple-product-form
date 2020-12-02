import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scoped.css';

export default function ButtonLink(props) {
  const { children, className, disabled, id, onClick, to } = props;
  const classes = ['root-btn-link', className, disabled && 'btn-link-disabled'].filter(Boolean).join(' ');

  return (
    <Link className={classes} id={id} onClick={onClick} to={to}>
      {children}
    </Link>
  );
}

ButtonLink.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  id: '',
  onClick: () => {},
  to: '',
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};
