const express= require('express');
const { ApolloServer }= require('apollo-server-express');
const typeDefs= require("./schemas/typeDefs");
const resolvers= require("./schemas/resolvers");

const db= require('./config/db');
const path= require('path');

const app= express();
const PORT= process.env.port || 3001;
const server= new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const startApolloServer= async (typeDefs, resolvers) =>{
    await server.start();
    server.applyMiddleware({app});
  
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`Now listening on localhost:${PORT}`);
        console.log(`GraphQL GUI: http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
};
    
startApolloServer(typeDefs, resolvers);