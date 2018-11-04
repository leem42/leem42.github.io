import {Header} from './Header'
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="root container-fluid">
        <div className="row pt-5">
          <Header/>          
        </div>
      </div>
    );
  }
}

export default App;
