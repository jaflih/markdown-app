import React, { Component } from 'react';
import './App.css';

import { sampleText } from './sampleText';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea rows="35" className="form-control" value={sampleText}></textarea>
          </div>
          <div className="col-sm-6">{sampleText}</div>
        </div>
      </div>
    );
  }
}

export default App;
