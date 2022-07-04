describe("printnums", function () {
    it("should be a defined function", function () {
        expect(typeof printnums).toBe("function");
    });
    it("should not return undefined when called", function () {
        expect(printnums()).not.toBe(undefined);
    });
});