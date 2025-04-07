import { GraphQLClient } from "graphql-request";

const endPoint = `https://graphql.contentful.com/content/v1/spaces/oibwaxx12z4v`;

const QLclient = new GraphQLClient(endPoint, {
  headers: {
    Authorization: `Bearer NN5vtRAXL9EZ_cRd0TRNYeaS6KcZ-2X8D4BUNv3Jezw`,
  },
});

export default QLclient;
