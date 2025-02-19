import { compute } from './compute';

describe('compute', () => {
    console.log('Test executed by: Ulas Karamustafaoglu - Student ID: S00219971');

    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should return 2 if input is 1', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
    it('Test executed by Ulas Karamustafaoglu - Student ID: S00219971', () => {
        expect(true).toBeTrue();
    });
    
});
