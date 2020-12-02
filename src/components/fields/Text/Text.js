import React from 'react';
import PropTypes from 'prop-types';
import './styles.scoped.css';

export default function Text(props) {
  const { className, hideLabel = false, input, inputProps, meta: { touched, error } } = props;
  const label = `${input.value}` && !hideLabel;
  const notEmpty = label ? 'not-empty' : '';
  const classes = ['root-text', className, notEmpty].filter(Boolean).join(' ');
  console.log(input.value)
  console.log(!hideLabel)
  return (
    <div className='root-text-container'>
      {label && (<label className='root-text-label'>{inputProps.placeholder}</label>)}
      {inputProps.action && <div className='root-text-side-action'>{inputProps.action}</div>}
      <input className={classes} {...input} {...inputProps} />
      {touched && error && <span className='root-text-error'>{error}</span>}
    </div>
  );
}

Text.defaultProps = {
  className: '',
  hideLabel: false,
  input: {},
  inputProps: {},
  meta: {},
};

Text.propTypes = {
  className: PropTypes.string,
  hideLabel: PropTypes.bool,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
};
