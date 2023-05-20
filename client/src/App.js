import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Users from "./users/Users";
 
import './App.css';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
