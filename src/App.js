import logo from './logo.svg';
import './App.css';

import { sampleText } from './sampleText';

function App() {
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

export default App;
