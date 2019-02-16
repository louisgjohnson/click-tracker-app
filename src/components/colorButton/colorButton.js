import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './colorButton.module.scss';

const ColorButton = ({ color, checked }) => {
  const _onClick = event => {
    this.props.onClick(event.target.value);
  };

  const className = checked ? `${color}--checked` : color;
  return (
    <div className={styles.root}>
      <label htmlFor={color} className={styles[className]} />
      <input
        type="radio"
        name="colorPicker"
        checked={checked}
        onChange={_onClick}
        id={color}
        value={color}
        className={styles.input}
      />
    </div>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default memo(ColorButton);
