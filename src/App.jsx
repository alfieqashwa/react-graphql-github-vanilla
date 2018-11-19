import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

const TITLE = 'React GraphQL GitHub Client';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers : {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN // TOKEN is hidden on .env
    }`,
  },
});

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
  };

  componentDidMount() {
    // fetch data
  }

  onChange = (e) => {
    this.setState({ path: e.target.value });
  }

  onSubmit = (e) => {
    // fetch data
    e.preventDefault();
  };

  render() {
    const { path } = this.state;    // destructuring
    return (
      <div className="App">
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <input
            id="url"
            type="text"
            value={path}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>
        <hr />

        {/*...result!*/}
      </div>
    );
  }
}

export default App;
