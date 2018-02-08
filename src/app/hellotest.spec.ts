// xdescribe doesn't run these tests
// fdescribe forces only this test to run

describe(" in hellotest.spec.ts: string test", () => {
    let expected = '';
    let notExpected = '';
    let expectMatch = null;

    //define the variable
    beforeEach(() => {
        expected = 'hellotest';
        notExpected = 'hellotest123';
        expectMatch = new RegExp(/^hello/);
    })

    //clean the variable
    afterEach(() => {
        expected = '';
        notExpected = '';
    })

    it('checks if hellotest is hellotest', () => expect('hellotest').toBe(expected));

    it('checks if hellotest is not hellotest', () => expect('hellotest').not.toBe(notExpected));

    it('checks if hellotest stars with hello', () => expect('hellotest').toMatch(expectMatch));
})

//don't wanna run a describe, put x in front
xdescribe('in hellotest.spec.ts :JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

//only wanna run a describe ,put f in front
describe("in hellotest.spec.ts : A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});