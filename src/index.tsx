import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './Store';
import './index.css';
import App from './App';
//import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import 'fontsource-roboto';
import * as Config from './Config/SiteConfig';
import './Pages/Auth/Firebase.ts';

// import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: Config.GRAPHQL_URI,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
