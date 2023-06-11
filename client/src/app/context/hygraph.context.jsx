/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import React from 'react';
import { settings } from '../config/settings';

// HTTP link to the GraphQL resource
const httpLink = new HttpLink({
  uri: settings.HYGRAPH_CONTENT_API,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${settings.HYGRAPH_ACCESS_TOKEN}`,
    },
  }));
  return forward(operation);
});

// Create an Apollo GraphQL client
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          postsConnection: relayStylePagination(),
        },
      },
    },
  }),
});

function HygraphProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export { HygraphProvider };
