const { Main } = require("../src/app");

describe("Berlin Clock tests", function() {
    let main = new Main();

    it("Should return correct simple minutes representation", function() {
        let result = main.simpleMinutes(3);
        
        expect(result).toBe("Y Y Y O");
    })

    it("Should return correct five minutes blocsk representation", function() {
        let result = main.fiveMinutesBlocks(23);

        expect(result).toBe("Y Y R Y O O O O O O O");
    })
    
    it("Should return correct seconds lamp", function() {
        let resultEven = main.secondsLamp(2);
        let resultOdd = main.secondsLamp(3);
        
        expect(resultEven).toBe("Y");
        expect(resultOdd).toBe("O");
    });
}); 