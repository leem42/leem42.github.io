import {Header} from './Header'
import {Projects} from './Projects'
import {Footer} from './Footer'
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="root container-fluid">
        <div className="row pt-5 mb-5">
          <Header/>          
        </div>
        <Projects/>  
        <Footer/>
      </div>
    );
  }
}

export default App;
