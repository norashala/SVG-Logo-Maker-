import { Square } from "./shapes.js";

test("Square has correct size", () => {
    const square = new Square("red", "white", "oop");
    expect(square.size).toBe(160);
    expect(square.bgColor).toBe("red");
    expect(square.textColor).toBe("white");
    expect(square.text).toBe("OOP");

    const svgString = square.generateSVG();
    console.log(svgString);
});
