import { it } from "vitest";
import { Main } from "../app";

describe("Berlin Clock tests", function() {
    let main = new Main();

    it("Should return correct simple minutes representation", function() {
        let result = main.simpleMinutes(3);
        
        expect(result).toBe("Y Y Y O")
    })









    it('lights for the hours', () => {
      expect(simpleHeure(0)).toBe('0000');
      expect(simpleHeure(1)).toBe('1000');
      expect(simpleHeure(2)).toBe('1100');
      expect(simpleHeure(3)).toBe('1110');
      expect(simpleHeure(4)).toBe('1111');
    });

    it('lights for each 5 hours block', () => {
      expect(cinqHeure(0)).toBe('0000');
      expect(cinqHeure(4)).toBe('0000');

      expect(cinqHeure(5)).toBe('1000');
      expect(cinqHeure(9)).toBe('1000');

      expect(cinqHeure(10)).toBe('1100');
      expect(cinqHeure(14)).toBe('1100');

      expect(cinqHeure(15)).toBe('1110');
      expect(cinqHeure(19)).toBe('1110');

      expect(cinqHeure(20)).toBe('1111');
      expect(cinqHeure(24)).toBe('1111');
    });
}); 