const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: {
      id: { type: GraphQLID },
      type: GraphQLString
    }
  }
});

module.exports = UserType;
