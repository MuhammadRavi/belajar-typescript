describe("Union", function () {
    it("Should support in typescript", function () {
        let sample: number | string | boolean = "Muhammad Ravi";

        console.info(sample);

        sample = 24;
        console.info(sample);

        sample = false;
        console.info(sample);
    })

    it('Should support typeof operator', function () {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 1;
            } else {
                return !value;
            }
        }

        expect(process("ravi")).toBe("RAVI");
        expect(process(10)).toBe(11);
        expect(process(false)).toBe(true);

    })
})