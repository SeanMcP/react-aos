import { createAttributes } from '../component/utils';

describe('createAttributes', () => {
    test('Should return object', () => {
        expect(createAttributes({})).toMatchObject({});
    });
});