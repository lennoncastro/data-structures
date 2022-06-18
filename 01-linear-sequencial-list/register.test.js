const List = require('./register.mjs');

describe('::register.mjs', () => {

    describe('::initialize', () => {
        it('on initialize element length should be 0', () => {
            const list = new List();
            expect(list.initialize()).toBe(0);
        });
    });

    describe('::restart', () => {
        it('on restart element length should be 0', () => {
            const list = new List();
            expect(list.restart()).toBe(0);
        });

        it('on restart filled list length should be 0', () => {
            const list = new List();

            for (let i = 0; i < 50; i++) list.insertElement(i, i + 1);

            expect(list.restart()).toBe(0);
        });
    });

    describe('::insertion', () => {
        let list;

        beforeEach(() => list = new List());

        it('when list is empty inserting a element insert should be true', () => {
            expect(list.insertElement(0, 1)).toBe(true);
            expect(list.getElementsLength()).toBe(1);
        });

        it('when list is not empty inserting a element insert should be true', () => {
            const list = new List();
            list.insertElement(0, 1)
            expect(list.insertElement(1, 2)).toBe(true);
            expect(list.getElementsLength()).toBe(2);
        });

        it('when list is full inserting a element insert should be false', () => {
            const list = new List();

            for (let i = 0; i < 50; i++) list.insertElement(i, i + 1);

            expect(list.insertElement(1, 2)).toBe(false);
            expect(list.getElementsLength()).toBe(50);
        });

        it('when insert a element passing a wrong position inserting should be false', () => {
            const list = new List();
            expect(list.insertElement(-1, 2)).toBe(false);
            expect(list.getElementsLength()).toBe(0);
        });

        it('when insert a element passing a position bigger than allowed inserting should be false', () => {
            const list = new List();
            expect(list.insertElement(51, 2)).toBe(false);
            expect(list.getElementsLength()).toBe(0);
        });

        it('when list is not empty and inserting a element in a specif position should realoc positions correctly', () => {
            const list = new List();

            for (let i = 0; i < 5; i++) list.insertElement(i, i + 1);

            let expectedElement = [];
            expectedElement[0] = list.getElementsLength[0]
            expectedElement[1] = list.getElementsLength[1];
            expectedElement[2] = list.getElementsLength[2];
            expectedElement[3] = list.getElementsLength[3];

            expect(list.insertElement(5, 6)).toBe(true);
            expect(list.getElementsLength()).toBe(6);
            expect(list[0]).toBe(expectedElement[0]);
            expect(list[1]).toBe(expectedElement[1]);
            expect(list[2]).toBe(expectedElement[2]);
            expect(list[3]).toBe(expectedElement[3]);
        });
    });

    describe(':sequencial search', () => {
        let list;

        beforeEach(() => list = new List());

        it('when item found should return the correct item position', () => {
            for (let i = 0; i < 50; i++) list.insertElement(i, i + 1);

            expect(list.sequencialSearch(5)).toBe(4);
        });

        it('when item not found should return the -1 position', () => {
            for (let i = 0; i < 50; i++) list.insertElement(i, i + 1);

            expect(list.sequencialSearch(51)).toBe(-1);
        });
    });

    describe('::remove item', () => {
        let list;

        beforeEach(() => list = new List());

        it('when try remove item with invalid range should return false', () => {
            expect(list.removeItem(-1)).toBe(false);
        });

        it('when remove item with full range should return false', () => {
            expect(list.removeItem(51)).toBe(false);
        });

        it('when remove item not found should return false', () => {
            expect(list.removeItem(0)).toBe(false);
        });

        it('when remove item from an empty list should return false', () => {
            expect(list.removeItem(1)).toBe(false);
        });

        it('when remove item with success should return true', () => {
            for (let i = 0; i < 10; i++) list.insertElement(i, i);

            expect(list.removeItem(4)).toBe(true);
            expect(list.getElementsLength()).toBe(9);

            let expectedElement = [];
            expectedElement[0] = list.getElementsLength[0]
            expectedElement[1] = list.getElementsLength[1];
            expectedElement[2] = list.getElementsLength[2];
            expectedElement[3] = list.getElementsLength[3];
            expectedElement[4] = list.getElementsLength[5];
            expectedElement[5] = list.getElementsLength[6];
            expectedElement[6] = list.getElementsLength[7];
            expectedElement[7] = list.getElementsLength[8];
            expectedElement[8] = list.getElementsLength[9];

            for(let j = 0; j < list.getElementsLength; j++) 
                expect(list.items[j]).toBe(expectedElement[j]);
        });
    });
});
