describe("the function toCamelCase", function () {
    it("should be a defined function", function () {
        expect(typeof toCamelCase).toBe("function");
    });
});

describe("the function solution", function () {
    it("should be a defined function", function () {
        expect(typeof solution).toBe("function");
    });
});

describe("the function digitize", function () {
    it("should be a defined function", function () {
        expect(typeof digitize).toBe("function");
    });

    it("should return an array when called", function () {
        expect(typeof digitize()).toBe("object");
    });
//    TypeError: Cannot read properties of undefined (reading 'reverse')

});

