import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ColorButton from '../colorButton/colorButton';
import styles from './colorPicker.module.scss';

const ColorPicker = ({ colors, onClick, selected }) => {
  return (
    <div className={styles.root}>
      <span className={styles.text}>Colours:</span>
      {getColorButtons({ colors, onClick, selected })}
    </div>
  );
};

const getColorButtons = ({ colors, onClick, selected }) =>
  colors.map(color => (
    <ColorButton
      key={color}
      onClick={onClick}
      checked={selected === color}
      color={color}
    />
  ));

ColorPicker.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default memo(ColorPicker);
