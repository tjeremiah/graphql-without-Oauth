import React from "react"
import './App.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import AlbumContainer from './containers/AlbumContainer'

//Initialize Apollo Client
const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql" // graphql server link
  })

})

export function App() {
  return (
    <ApolloProvider client = {client} >
      <AlbumContainer />
    </ApolloProvider>
    
  );
}

export default App;
