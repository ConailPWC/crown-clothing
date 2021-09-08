import React from 'react';
import HomePage from './Pages/homepage/homepage.commponent'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
