import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

import Landing from './componets/pages/Landing';
import Builder from './componets/pages/Builder';
import Community from './componets/pages/Community';
import SignIn from './componets/pages/SignIn';
import Account from './componets/pages/Account';

// const endpoint= createHttpLink({
//   uri: '/graphql',
// });

// const setHeader= setContext((_, {headers}) => {
//     const token= Auth.getToken();
    
//     return {
//       headers:{
//         ...headers,
//         authorization: token ? `Bearer: ${token}` : ''
//       }
//     };
// });

// const client= new ApolloClient({
//   link: setHeader.concat(endpoint),
//   cache: new InMemoryCache()
// });

function App() {
  return (
   // <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/board' element={<Builder/>}></Route>
            <Route path='/posts' element={<Community/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/account' element={<Account/>}></Route>
          </Routes>
        </Router>
   // </ApolloProvider>

  );
}

export default App;
