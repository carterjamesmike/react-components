const { Poll } = require('../models');

const resolvers = {

    Query: {
        polls: async () => {
            return await Poll.find();
        }   
    },

    Mutation: {
        addVote: async (parent, { pollId, option }) => {
            const poll = await Poll.findOneAndUpdate(
                { _id: pollId, 'pollOptions.option': option },
                { $inc: { 'pollOptions.$.votes': 1 } },
                { new: true }
            );
            return poll;
        }
    }
};

module.exports = resolvers;
