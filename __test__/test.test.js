describe.skip('data handler test for all data', () => {
    it('should read all data from json file, data people to be exact', () => {
        handler.getAll()
            .then((result) => {
                expect(result).toBeDefined()
            })
            .catch((error) => {
                assert.isNotOk(error, 'Promise error');
            });
    });
})