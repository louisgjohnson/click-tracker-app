import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './stats.module.scss';

const Stats = ({ clickAmount }) => {
  const clickState = useState(0);
  const updateClicksInSession = clickState[1];
  const [getOriginalAmount, updateOriginalAmount] = useState(clickAmount);

  if (getOriginalAmount > clickAmount) {
    updateClicksInSession(0);
    updateOriginalAmount(clickAmount);
  }

  return (
    <div className={styles.root}>
      <span>Clicks in total: {clickAmount} </span>
      <span>Clicks this session: {clickAmount - getOriginalAmount} </span>
    </div>
  );
};

Stats.propTypes = {
  clickAmount: PropTypes.number.isRequired
};

export default memo(Stats);
