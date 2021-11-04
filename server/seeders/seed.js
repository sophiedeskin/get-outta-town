const db = require("../config/connection");
const { User, Trip } = require("../models");
const userSeeds = require("./userSeeds.json");
const tripSeeds = require("./tripSeeds.json");
db.once("open", async () => {
  try {
    // Deleting our Trips
    await Trip.deleteMany({});
    // Deleting our Users
    await User.deleteMany({});
    // Loop over our trips
    for (let i = 0; i < tripSeeds.length; i++) {
      const trip = await Trip.create(tripSeeds[i]);
      const user = await User.create(userSeeds[i]);
      await User.findOneAndUpdate(
        { _id: user._id },
        {
          $addToSet: {
            trips: trip._id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("all done!");
  process.exit(0);
});