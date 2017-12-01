import React, { Component } from 'react';
import './App.css';

import Button from 'antd/lib/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          AntD has been installed :D
        </p>
        <Button type="primary">Button</Button>

      </div>
    );
  }
}

export default App;
