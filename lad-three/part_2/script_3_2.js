// script_3_2.js
// Варіант 10. Обчислення f(x) = x / (e^x - 1) для x від 0.1 до 2.0 з кроком 0.2

let results = "<b>Обчислення функції f(x) = x / (e^x - 1):</b><br>";
results += "<table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse; margin-top:10px;'>";
results += "<tr><th>x</th><th>f(x)</th></tr>";

for (let x = 0.1; x <= 2.0 + 0.0001; x += 0.2) {
    let fx = x / (Math.exp(x) - 1);
    results += `<tr><td>${x.toFixed(1)}</td><td>${fx.toFixed(5)}</td></tr>`;
}

results += "</table>";

document.getElementById("output").innerHTML = results;