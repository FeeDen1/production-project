import {classNames} from "./classNames";

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['class1', 'class2'])).toBe(expected)
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true, scrollable: undefined}, ['class1', 'class2'])).toBe(expected)
    });
})