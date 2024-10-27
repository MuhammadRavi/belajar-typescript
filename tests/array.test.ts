describe("Array", function () {
    it("Should same with javascript", function () {
        const name: string[] = ["Muhammad", "Ravi", "Mega"];
        const values: number[] = [1, 2, 3];

        console.info(name);
        console.info(values);
    })

    it('Should support Read Only Array', function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);
    })

    it('Should support Tupple', function () {
        const hobbies: readonly [string, string, number] = ["Membaca", "Menulis", 123];
        console.info(hobbies);
    })
})