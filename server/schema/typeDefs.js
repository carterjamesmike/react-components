const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Poll {
        _id: ID
        pollQuestion: String
        pollOptions: [PollOption]

    }

    type PollOption {
        option: String
        votes: Int
    }

    type Mutation {
        addVote(pollId: ID!, option: String!): Poll
    }

    type Query {
        polls: [Poll]
    }

    `;

module.exports = typeDefs;