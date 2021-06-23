const dataHandler = require('../dataHandler')



describe.skip('data handler test for all data', () => {
    it('should read all data from json file, data people to be exact', () =>{
         dataHandler.readAllData()
        .then((result) =>{
            expect(result).toBeDefined()
        })
        .catch((error) => {
            assert.isNotOk(error, 'Promise error');
        });
    });
})

describe.skip('data handler test for detail data', () => {
    it('should read single data from json file, data people to be exact detail', () => {
        dataHandler.getDetailById(2)
            .then((result) => {
                expect(result).toBeDefined()
            })
            .catch((error) => {
                assert.isNotOk(error, 'Promise error');
            });
    });
})

describe.skip('data handler test for search data', () => {
    it('should find data from json file based on query', () => {
        dataHandler.getDetailByQuery('udin')
            .then((result) => {
                expect(result).toBeDefined()
            })
            .catch((error) => {
                assert.isNotOk(error, 'Promise error');
            });
    });
})



