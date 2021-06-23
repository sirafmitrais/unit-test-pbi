const handler = require('../handler')

describe('data handler test for all data', () => {
    it('should read all data from json file, data people to be exact', () => {
        const result = handler.getAll();
        console.log(result)
    });
})