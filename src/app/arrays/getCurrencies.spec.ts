import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return an array containing USD, GBP, and EUR', () => {
        const result = getCurrencies();

        expect(result).toContain('USD');
        expect(result).toContain('GBP');
        expect(result).toContain('EUR');
    });

    it('should NOT contain CAD', () => {
        const result = getCurrencies();

        expect(result).not.toContain('CAD');
    });
});
