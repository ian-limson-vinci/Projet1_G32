import { Main } from "../app";

describe("Berlin Clock tests", function() {
    let main = new Main();

    it("Should return correct simple minutes representation", function() {
        let result = main.simpleMinutes(3);
        
        expect(result).toBe("Y Y Y O")
    })








    
    it('should turn on the correct number of lamps for hours', () => {
      expect(simpleHeure(0)).toBe('0000');
      expect(simpleHeure(1)).toBe('1000');
      expect(simpleHeure(2)).toBe('1100');
      expect(simpleHeure(3)).toBe('1110');
      expect(simpleHeure(4)).toBe('1111');
    });
}); 