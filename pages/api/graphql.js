import { ApolloServer, gql } from 'apollo-server-micro';
import axios from 'axios';

const typeDefs = gql`
  type Query {
    beers: [Beer!]!
  }
  type Beer {
    id: Int
    name: String
    brewery_type: String
    street: String
    address_2: String
    address_3: String
    city: String
    state: String
    county_province: String
    postal_code: String
    country: String
    longitude: String
    latitude: String
    phone: String
    website_url: String
    updated_at: String
    created_at: String
  }
`;

const resolvers = {
  Query: {
    async beers(parent, args, context) {
      try {
        const res = await axios.get('https://api.openbrewerydb.org/breweries');
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
