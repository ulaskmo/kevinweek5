import { greet } from './greet';

describe('greet', () => {
    it('should include the name in the message', () => {
        const result = greet('Frank');
        expect(result).toContain('Frank');
    });

    it('should not include the name if it is different', () => {
        const result = greet('John');
        expect(result).not.toContain('Frank');
    });
});
