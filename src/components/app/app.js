import React from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.say({ text: 'What does the cowsay?' }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        content: cowsay.say({
          text: faker.lorem.words(2),
        }), 
      };
    });
  }

  render() {
    return (
      <div className='cowsay'>
        <Header/> {}
        <body>
        <button onClick={this.handleClick}>Click Me!</button>
        <pre>{this.state.content}</pre>
        </body>
      </div>
    );
  }
}

export default App;
