import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
          <p>Shall we eat a burger?</p>
        </Layout>
      </div>
    );
  }
}

export default App;
