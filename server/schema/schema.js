const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");

const books = [
  { name: "Book1", genre: "A", id: "1" },
  { name: "Book2", genre: "B", id: "2" },
  { name: "Book3", genre: "C", id: "3" },
  { name: "Book4", genre: "A", id: "4" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // getData from db
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.expoerts = new GraphQLSchema({
  query: RootQuery
});
