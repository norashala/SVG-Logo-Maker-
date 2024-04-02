// define Shape class for Square, Circle, and Triangle to inherit from.
export class Shape {
    constructor(bgColor, textColor, text) {
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.text = text;
        this.fontSize = 30;
        this.size = 160;
    }

    generateSVG() {
        throw new Error("Method 'generateSVG()' must be implemented.");
    }
}

export class Square extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

    generateSVG() {
        return `<svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${this.size}" height="${this.size}" fill="${this.bgColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="${this.fontSize}" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    }
}

export class Circle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
        this.radius = this.size / 2;
    }

    generateSVG() {
        return `<svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.bgColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="${this.fontSize}" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    }
}

export class Triangle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

    generateSVG() {
        // Calculating the positions using this.size for a scalable approach
        const pointA = `${this.size / 2},0`; // Top middle of the canvas
        const pointB = `0,${this.size}`; // Bottom left corner of the canvas
        const pointC = `${this.size},${this.size}`; // Bottom right corner of the canvas

        return `<svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${pointA} ${pointB} ${pointC}" fill="${this.bgColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="${this.fontSize}" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}