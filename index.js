// index.js
import inquirer from "inquirer";
import fs from "fs";
import { Square, Circle, Triangle } from "./lib/shapes.js";


const PRE_CANNED_COLOR_OPTIONS = ["red", "green", "blue", "black", "white"];

function colorValidation(input) {
    // Regular expression for validating hexadecimal color code (copied from stackoverflow)
    const hexColorPattern = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

    // Check if the input is a valid hex code or a valid named color
    if (
        hexColorPattern.test(input) ||
        PRE_CANNED_COLOR_OPTIONS.includes(input.toLowerCase())
    ) {
        return true;
    } else {
        return "Unknown color. Try again.";
    }
}

async function promptUser() {
    try {
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "shape",
                message: "What shape would you like to create?",
                choices: ["Square", "Circle", "Triangle"],
            },
            {
                type: "text",
                name: "bgColor",
                message: `For the background choose a color hex string or ${PRE_CANNED_COLOR_OPTIONS}:`,
                validate: (input) => colorValidation(input),
            },
            {
                type: "text",
                name: "textColor",
                message: `For the text choose a color hex string or ${PRE_CANNED_COLOR_OPTIONS}:`,
                validate: (input) => colorValidation(input),
            },
            {
                type: "input",
                name: "text",
                message: "Enter 1 to 3 letters to include in the shape:",
                validate: (input) => {
                    if (input.length >= 1 && input.length <= 3) {
                        return true;
                    } else {
                        return "Please enter 1 to 3 letters you dumb millenial.";
                    }
                },
            },
        ]);

        const shape = answers.shape;
        const bgColor = answers.bgColor;
        const textColor = answers.textColor;
        const text = answers.text.toUpperCase();

        let logo;
        if (shape === "Square") {
            logo = new Square(bgColor, textColor, text);
        } else if (shape === "Circle") {
            logo = new Circle(bgColor, textColor, text);
        } else if (shape === "Triangle") {
            logo = new Triangle(bgColor, textColor, text);
        }

        const svgContent = logo.generateSVG();
        console.log("Generated logo.svg");

        // write svg file as shape.svg
        fs.writeFile("logo.svg", svgContent, (err) => {
            if (err) throw err;
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

promptUser();
