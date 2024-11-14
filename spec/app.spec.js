const { Main } = require("../src/app");

describe("Berlin Clock tests", function() {
    let main = new Main();

    it("Should return correct simple minutes representation", function() {
        let result = main.simpleMinutes(3);
        
        expect(result).toBe("Y Y Y O")
    })
}); 