describe("Any", function () {
    it("Should support in typescript", function () {
        const person: any = {
            id: 1,
            name: "Muhammad Ravi Mega Arasy",
            age: 27
        }

        console.info(person);

        person.age = 28;
        person.address = 'Indonesia';
        console.info(person);
    })
})