const { Schema, model } = require('mongoose');

const PollSchema = new Schema({
    pollQuestion: {
        type: String,
        required: true,
        trim: true
    },
    pollOptions: [{
        option: {
            type: String,
            required: true,
            trim: true
        },
        votes: {
            type: Number,
            required: true,
            default: 0
        }
    }]
});

const Poll = model('Poll', PollSchema);

module.exports = Poll;




                


    