import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    axios(`https://api.github.com/users/${this.props.user}/repos?per_page=250`)
      .then((response) => {
        this.setState({
          repos: response.data
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    );
  }
}

RepoList.propTypes = {
  user: PropTypes.string
};

export default RepoList;
