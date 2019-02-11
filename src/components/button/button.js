import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ disabled, onClick, children }) => (
  <button disabled={disabled} className={styles.root} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
