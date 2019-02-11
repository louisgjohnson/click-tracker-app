import React, { Component } from 'react';
import ClickData from '../../classes/clickData';
import PropTypes from 'prop-types';
import styles from './clickCanvas.module.scss';

class ClickCanvas extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.ctx = null;
    this.clickSize = 5;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  componentDidMount = () => {
    this.ctx = this.ref.current.getContext('2d');
    this.loadClicks(this.props.clicks);
  };

  loadClicks = clicks => {
    clicks.forEach(({ x, y, color }) => {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, this.clickSize, this.clickSize);
    });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.clicks.length > this.props.clicks.length) {
      this.clearClick(prevProps.clicks.pop());
    }
  };

  clearClick = ({ x, y }) => {
    this.ctx.clearRect(x, y, this.clickSize, this.clickSize);
  };

  renderClick = ({ x, y, color }) => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.clickSize, this.clickSize);
  };

  getClickData = (event, color) =>
    new ClickData({
      x: event.clientX,
      y: event.clientY,
      color
    });

  onClick = event => {
    const clickData = this.getClickData(event, this.props.clickColor);
    this.renderClick(clickData);
    this.props.registerClick(clickData);
  };

  render = () => (
    <canvas
      ref={this.ref}
      width={this.width}
      height={this.height}
      className={styles.root}
      onClick={this.onClick}
    />
  );
}

ClickCanvas.propTypes = {
  clicks: PropTypes.array,
  clickColor: PropTypes.string.isRequired,
  registerClick: PropTypes.func.isRequired
};

ClickCanvas.defaultProps = {
  clicks: []
};

export default ClickCanvas;
