"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var gql = require('apollo-server').gql;
exports.typeDefs = gql(__makeTemplateObject(["\ntype Query {\n    hello: String,\n}\n"], ["\ntype Query {\n    hello: String,\n}\n"]));
