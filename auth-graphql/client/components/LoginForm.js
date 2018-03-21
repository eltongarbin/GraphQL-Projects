import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from './../mutations/Login';
import query from './../queries/CurrentUser';

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    });
  }

  render() {
    return (
      <Fragment>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </Fragment>
    );
  }
}

export default graphql(mutation)(LoginForm);
