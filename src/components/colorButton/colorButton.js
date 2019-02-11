import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './colorButton.module.scss';

class ColorButton extends PureComponent {
  onClick = event => {
    this.props.onClick(event.target.value);
  };

  render = () => {
    const { color, checked } = this.props;
    const className = checked ? `${color}--checked` : color;
    return (
      <div className={styles.root}>
        <label htmlFor={color} className={styles[className]} />
        <input
          type="radio"
          name="colorPicker"
          checked={checked}
          onChange={this.onClick}
          id={color}
          value={color}
          className={styles.input}
        />
      </div>
    );
  };
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorButton;
