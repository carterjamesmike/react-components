const db = require('../config/connection');
const { Poll } = require('../models');
const pollSeeds = require('./pollSeed.json');

db.once('open', async () => {
    try {
        await Poll.deleteMany({});
        await Poll.create(pollSeeds);
        console.log('All done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });

    