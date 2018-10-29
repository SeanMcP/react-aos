import { createAttributes } from '../utils';

describe('createAttributes', () => {
    test('Should return object', () => {
        expect(createAttributes({})).toMatchObject({});
    });
});