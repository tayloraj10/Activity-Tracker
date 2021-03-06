import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import CalendarComponent from './calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: 'Loading'
    };
  }

  componentDidMount() {
    fetch('api/user')
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: 'Something went wrong!' };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <div style={{ height: 500, marginTop: 10 }}>
          <CalendarComponent />
        </div>
        {/* <ul>
          {this.state.data.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} - {contact.email}
              </li>
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;

const container = document.getElementById('app');
render(<App />, container);
