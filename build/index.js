"use strict";
var ApolloServer = require('apollo-server').ApolloServer;
var resolvers = require('./resolvers').resolvers;
var typeDefs = require("./schema").typeDefs;
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server is ready at " + url);
});
