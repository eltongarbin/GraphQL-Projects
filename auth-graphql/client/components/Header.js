import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import query from '../queries/CurrentUser';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) return <div />;
    if (user) {
      return (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      );
    } else {
      return (
        <Fragment>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
