const db = require('../config/connection');
const { User, Trip } = require('../models');
const userSeeds = require('./userSeeds.json');
const tripSeeds = require('./tripSeeds.json');

db.once('open', async () => {
  try {
    await Trip.deleteMany({});
    await User.deleteMany({});

    
    for (let i = 0; i < tripSeeds.length; i++) {
      const { _id } = await Trip.create(tripSeeds[i]);
      await User.create(userSeeds);
      const user = await User.findOneAndUpdate(
        { _id: _id },
        {
          $addToSet: {
            trips: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
