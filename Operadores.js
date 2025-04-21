// Lista de operadores en JavaScript

const operadores = {
    aritméticos: ['+', '-', '*', '/', '%', '**'],
    asignación: ['=', '+=', '-=', '*=', '/=', '%=', '**='],
    comparación: ['==', '!=', '===', '!==', '>', '<', '>=', '<='],
    lógicos: ['&&', '||', '!'],
    bitwise: ['&', '|', '^', '~', '<<', '>>', '>>>'],
    tipo: ['typeof', 'instanceof'],
    ternario: ['condición ? valor1 : valor2'],
    nullish: ['??'],
    spread_y_rest: ['...', '...rest'],
    incremento_y_decremento: ['++', '--']
};

console.log(operadores);
// Ejemplo de uso de algunos operadores
// Ejemplos de operadores aritméticos
const a = 10;
const b = 3;

console.log('Suma:', a + b); // 13
console.log('Resta:', a - b); // 7
console.log('Multiplicación:', a * b); // 30
console.log('División:', a / b); // 3.333...
console.log('Módulo:', a % b); // 1
console.log('Exponenciación:', a ** b); // 1000

// Ejemplos de operadores de asignación
let x = 5;

x += 3; // x = x + 3
console.log('x después de += 3:', x); // 8

x -= 2; // x = x - 2
console.log('x después de -= 2:', x); // 6

x *= 4; // x = x * 4
console.log('x después de *= 4:', x); // 24

x /= 3; // x = x / 3
console.log('x después de /= 3:', x); // 8

x %= 5; // x = x % 5
console.log('x después de %= 5:', x); // 3

x **= 2; // x = x ** 2
console.log('x después de **= 2:', x); // 9

// Ejemplos de operadores de comparación

console.log('Igualdad débil (==):', a == b); // false
console.log('Desigualdad débil (!=):', a != b); // true
console.log('Igualdad estricta (===):', a === b); // false
console.log('Desigualdad estricta (!==):', a !== b); // true
console.log('Mayor que (>):', a > b); // true
console.log('Menor que (<):', a < b); // false
console.log('Mayor o igual que (>=):', a >= b); // true
console.log('Menor o igual que (<=):', a <= b); // false

// Ejemplos de operadores lógicos

const p = true;
const q = false;

console.log('AND lógico (&&):', p && q); // false
console.log('OR lógico (||):', p || q); // true
console.log('NOT lógico (!):', !p); // false

// Valor dentro de rango

let minimo = 0;, maximo = 5;

let dentroRango = dato => minimo <= dato && dato <= maximo;
console.log('Dentro de rango (0-5):', dentroRango(3)); // true
console.log('Dentro de rango (0-5):', dentroRango(6)); // false