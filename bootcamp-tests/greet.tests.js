describe ('Testing the greet function', function(){
    it('should return Hello, Bob when it is called with Bob' , 
    function(){
        assert.equal(greet('Bob'), 'Hello, Bob');

        assert.deepEqual(greet('Sam'), 'Hello, Sam');
    });

});