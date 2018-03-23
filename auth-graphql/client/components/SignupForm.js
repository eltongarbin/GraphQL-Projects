import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from './../mutations/Signup';
import query from './../queries/CurrentUser';
import history from './../utils/history';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      history.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <Fragment>
        <h3>Signup</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </Fragment>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
