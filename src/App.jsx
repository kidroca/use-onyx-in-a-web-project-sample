import React, { Component } from 'react';

import HelloWorld from './components/hello-world';
import ComponentUsingOnyx from './components/ComponentUsingOnyx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <HelloWorld title="Hello from React webpack" />
        <ComponentUsingOnyx />
      </section>
    );
  }
}

export default App;
