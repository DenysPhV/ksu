// script_3_2.js
// Варіант 10. Обчислення f(x) = x / (e^x - 1) для x від 0.1 до 2.0 з кроком 0.2

let results = "Обчислення функції f(x) = x / (e^x - 1):\n";

for (let x = 0.1; x <= 2.0 + 0.0001; x += 0.2) {
    let fx = x / (Math.exp(x) - 1);
    results += "x = " + x.toFixed(1) + " → f(x) = " + fx.toFixed(5) + "\n";
}

alert(results);
