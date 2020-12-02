import React from 'react';
import PropTypes from 'prop-types';
import './styles.scoped.css';

export default function Switch(props){
  const { checked, input, onClick } = props;
  return(
    <div className='root-switch' onClick={onClick}>
      <input {...input} checked={checked} type="checkbox"/>
      <span className='root-switch-slider'/>
    </div>
  );
}

Switch.defaultProps = {
  checked: false,
  input: {},
  label: '',
  onClick: ()=>{},
};

Switch.propTypes = {
  checked: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
