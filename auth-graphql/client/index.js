import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Header from './components/Header';
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link: new HttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className="container">
          <Header />
          <Route exact path="/" render={() => <div />} />
          <Route path="/login" component={LoginForm} />
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
