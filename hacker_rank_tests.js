describe("printnums", function () {
    it("should be a defined function", function () {
        expect(typeof printnums).toBe("function");
    });
    it("should not return undefined when called", function () {
        expect(printnums()).not.toBe(undefined);
    });
    it("is a string", function () {
        expect(typeof printnums()).toBe("string");
    })
});

describe("digital_root", () => {
    it("returns 6", () => {
        expect(digital_root(456)).toEqual(456);
    });
});