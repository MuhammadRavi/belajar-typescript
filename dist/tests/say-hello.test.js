import { sayHello } from "../src/sayHello";
describe('sayHello', function () {
    it('Should Return Hello Ravi', function () {
        expect(sayHello("Ravi")).toBe('Hello Ravi');
    });
});
