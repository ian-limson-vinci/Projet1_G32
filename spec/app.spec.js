const { Main } = require("../src/app");

describe("Berlin Clock tests", function() {
    let main = new Main();

    it("Should return correct simple minutes representation", function() {
        let result = main.simpleMinutes(8);
        
        expect(result).toBe("Y Y Y O");
    })

    it("Should return correct five minutes blocks representation", function() {
        let result = main.fiveMinutesBlocks(23);

        expect(result).toBe("Y Y R Y O O O O O O O");
    })

    it("Should return correct simpleHours representation", function() {
        let result = main.simpleHours(17);

        expect(result).toBe("R R O O");
    })

    it("Should return correct five hours blocks representation", function() {
        let result = main.fiveHoursBlocks(17);

        expect(result).toBe("R R R O");
    })
}); 