// script_3_1.js
// Варіант 10. Обробка двох дійсних чисел x, y
// Результати зберігаються у localStorage

let x = parseFloat(prompt("Введіть значення x:"));
let y = parseFloat(prompt("Введіть значення y:"));

if (x < 0 && y < 0) {
    x = Math.abs(x);
    y = Math.abs(y);
} else if ((x < 0 && y >= 0) || (x >= 0 && y < 0)) {
    x += 0.5;
    y += 0.5;
} else if (x >= 0 && y >= 0 && !(x >= 0.5 && x <= 2.0) && !(y >= 0.5 && y <= 2.0)) {
    x /= 10;
    y /= 10;
}

// Завантаження попередніх результатів із localStorage
let history = JSON.parse(localStorage.getItem("results")) || [];

// Додаємо новий результат у початок масиву
history.unshift({
    x: x.toFixed(3),
    y: y.toFixed(3),
    time: new Date().toLocaleString()
});

// Зберігаємо оновлену історію
localStorage.setItem("results", JSON.stringify(history));

// Формування таблиці
let output = "<h3>Історія результатів</h3>";
output += "<table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse; width: 60%;'>";
output += "<tr style='background-color:#e0e0e0;'><th>Час</th><th>x</th><th>y</th></tr>";

history.forEach((item, index) => {
    let bgColor = index === 0 ? "#d1ffd1" : "#ffffff"; // новіший результат виділяється
    output += `<tr style="background-color:${bgColor};">
        <td>${item.time}</td>
        <td>${item.x}</td>
        <td>${item.y}</td>
    </tr>`;
});

output += "</table>";

// Вивід у <div id="output">
document.getElementById("output").innerHTML = output;
