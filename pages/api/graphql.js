import { ApolloServer, gql } from 'apollo-server-micro';
import axios from 'axios';

const typeDefs = gql`
  type Query {
    beers: [Beer!]!
  }
  type Beer {
    id: Int
    name: String
    tagline: String
    first_brewed: String
    description: String
    image_url: String
    abv: Float
  }
`;

const resolvers = {
  Query: {
    async beers(parent, args, context) {
      try {
        const res = await axios.get('https://api.punkapi.com/v2/beers');
        const beer = res.data;

        return beer;
      } catch (error) {
        throw error;
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
