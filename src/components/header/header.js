import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.content_container}>{children}</div>
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
