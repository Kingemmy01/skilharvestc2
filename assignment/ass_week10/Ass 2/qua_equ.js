//write a program that solves this quadratic equation
// 3x^2 + 9x + 23 = 0. Tip: Use the formala method

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
        return "No real roots";
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `One real root: x = ${root}`;
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Two real roots: x₁ = ${root1}, x₂ = ${root2}`;
    }
}

// Coefficients of the quadratic equation: ax^2 + bx + c = 0
const a = 4;
const b = 8;
const c = 32;

const solution = solveQuadratic(a, b, c);
console.log(`Quadratic equation ${a}x^2 + ${b}x + ${c} = 0: ${solution}`);
