import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
    describe('getFullYear', () => {
        it('Should return current year', () => {
            const currentYear = new Date().getFullYear();
            expect(getFullYear()).toBe(currentYear);
        });
    });

    describe('getFooterCopy', () => {
        it('Should return "Holberton School" for true. "Holberton School main dashboard" for false', () => {
            expect(getFooterCopy(true)).toBe('Holberton School');
            expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
        });
    });

    describe('getLatestNotification', () => {
        it('Should return "<strong>Urgent requirement</strong> - complete by EOD"', () => {
            expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
        });
    });
});