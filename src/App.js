import React, { Component } from 'react';
import { Button, ClickCanvas, Header, ColorPicker, Stats } from './components';
import { save, load } from './methods/serialization';
import { addItem, removeLastItem } from './methods/arrayUtils';
import styles from './App.module.scss';

class App extends Component {
  constructor() {
    super();
    this.colors = ['red', 'green', 'blue'];
    this.state = {
      clicks: load('clicks') || [],
      currentColor: load('currentColor') || this.colors[0]
    };
  }

  updatedCurrentColor = newColor => {
    this.setState({
      currentColor: newColor
    });
  };

  registerClick = clickData => {
    const clicks = addItem(this.state.clicks, clickData);
    this.setState({ clicks });
  };

  undoClick = () => {
    if (this.state.clicks.length) {
      const index = this.state.clicks.length - 1;
      const clicks = removeLastItem(this.state.clicks, index);
      this.setState({ clicks });
    }
  };

  saveData = () => {
    save({ key: 'clicks', data: this.state.clicks });
    save({ key: 'currentColor', data: this.state.currentColor });
  };

  render() {
    const { currentColor, clicks } = this.state;
    return (
      <div className={styles.root}>
        <Header>
          <ColorPicker
            selected={currentColor}
            colors={this.colors}
            onClick={this.updatedCurrentColor}
          />
          <div>
            <Button
              disabled={this.state.clicks.length === 0}
              onClick={this.undoClick}
            >
              Undo click
            </Button>
            <Button onClick={this.saveData}>Save</Button>
          </div>
          <Stats clickAmount={this.state.clicks.length} />
        </Header>
        <ClickCanvas
          clicks={clicks}
          registerClick={this.registerClick}
          clickColor={currentColor}
        />
      </div>
    );
  }
}

export default App;
