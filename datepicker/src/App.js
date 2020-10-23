import React from 'react';
import './App.css';
import Footer from './Footer';
import DatePicker from './CustomDatePicker';
import { isDate } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: new Date(),
    }
  }

  handleChange(date) {
    this.setState({ selected: date });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Date: {this.state.selected.toLocaleDateString()}</p>
          <p>Time: {this.state.selected.toLocaleTimeString()}</p>
          <div>
            <DatePicker
              selected={this.state.selected}
              onChange={(date) => this.handleChange(date)}
            />
          </div>
        </header>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
}

export default App;
