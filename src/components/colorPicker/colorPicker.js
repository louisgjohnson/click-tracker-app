import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorButton from '../colorButton/colorButton';
import styles from './colorPicker.module.scss';

class ColorPicker extends PureComponent {
  getColorButtons = colors =>
    colors.map(color => (
      <ColorButton
        key={color}
        onClick={this.props.onClick}
        checked={this.props.selected === color}
        color={color}
      />
    ));

  render = () => (
    <div className={styles.root}>
      <span className={styles.text}>Colours:</span>
      {this.getColorButtons(this.props.colors)}
    </div>
  );
}

ColorPicker.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default ColorPicker;
