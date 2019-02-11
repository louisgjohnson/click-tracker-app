import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './stats.module.scss';

class Stats extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clicksInSession: 0,
      originalClickAmount: props.clickAmount
    };
  }

  static getDerivedStateFromProps(props, state) {
    const clicksInSession = props.clickAmount - state.originalClickAmount;
    if (clicksInSession > 0) {
      return {
        clicksInSession
      };
    }
    return {
      clicksInSession: 0,
      originalClickAmount: props.clickAmount
    };
  }

  render = () => (
    <div className={styles.root}>
      <span>Clicks in total: {this.props.clickAmount} </span>
      <span>Clicks this session: {this.state.clicksInSession} </span>
    </div>
  );
}

Stats.propTypes = {
  clickAmount: PropTypes.number.isRequired
};

export default Stats;
