import React, { useState } from 'react';
import { Button, ClickCanvas, Header, ColorPicker, Stats } from './components';
import { save, load } from './methods/serialization';
import { addItem, removeLastItem } from './methods/arrayUtils';
import styles from './App.module.scss';

const App = () => {
  const colors = ['red', 'green', 'blue'];
  const [currentClicks, updateClicks] = useState(load('clicks') || []);
  const [currentColor, updateColor] = useState(
    load('currentColor') || colors[0]
  );

  const _registerClick = clickData => {
    const clicks = addItem(currentClicks, clickData);
    updateClicks(clicks);
  };

  const _undoClick = () => {
    undoClick([currentClicks, updateClicks]);
  };

  const _save = () => {
    saveData({ clicks: currentClicks, colors: currentColor });
  };

  return (
    <div className={styles.root}>
      <Header>
        <ColorPicker
          selected={currentColor}
          colors={colors}
          onClick={updateColor}
        />
        <div>
          <Button disabled={currentClicks.length === 0} onClick={_undoClick}>
            Undo click
          </Button>
          <Button onClick={_save}>Save</Button>
        </div>
        <Stats clickAmount={currentClicks.length} />
      </Header>
      <ClickCanvas
        clicks={currentClicks}
        registerClick={_registerClick}
        clickColor={currentColor}
      />
    </div>
  );
};

const undoClick = ([currentClicks, updateClicks]) => {
  if (currentClicks.length) {
    const clicks = removeLastItem(currentClicks);
    updateClicks(clicks);
  }
};

const saveData = ({ clicks, colors }) => {
  save({ key: 'clicks', data: clicks });
  save({ key: 'currentColor', data: colors });
};

export default App;
