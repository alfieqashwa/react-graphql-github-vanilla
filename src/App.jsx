import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

const TITLE = 'React GraphQL GitHub Client';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql'
  headers : {
    Authorization: 'bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
  },
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{TITLE}</h1>
      </div>
    );
  }
}

export default App;
