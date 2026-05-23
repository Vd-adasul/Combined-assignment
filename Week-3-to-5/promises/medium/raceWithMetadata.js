
// Problem Description – Race with Winner Information
//
// You are given an object where keys are labels and values are Promises.
// Your task is to implement raceWithMetadata(promiseMap).
//
// The function should behave like Promise.race, but also return which promise won.
//
// It must resolve with an object:
// { winner: <key>, value: <resolved value> }
async function raceWithMetadata(promiseMap) {
    return new Promise((resolve, reject) => {
        for (let [key, label] of Object.entries(promiseMap)) {
            Promise.resolve(label)
                .then((value) => {
                    resolve({ winner: key, value });
                })
                .catch((err) => {
                    reject({ winner: key, error: err });
                });
        }
    });
}

module.exports = raceWithMetadata;
