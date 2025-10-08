// Функція для обчислення середнього арифметичного, геометричного та гармонійного
function calculateMeans(a1, a2) {
    if (a1 <= 0 || a2 <= 0) {
        throw new Error("Середнє геометричне та гармонійне визначені лише для додатних чисел.");
    }

    const arithmetic = (a1 + a2) / 2;
    const geometric = Math.sqrt(a1 * a2);
    const harmonic = (2 * a1 * a2) / (a1 + a2);

    return { arithmetic, geometric, harmonic };
}

// Основна логіка: введення → обробка → виведення
try {
    const input1 = prompt("Введіть перше додатне число a1:");
    const input2 = prompt("Введіть друге додатне число a2:");

    const a1 = parseFloat(input1);
    const a2 = parseFloat(input2);

    if (isNaN(a1) || isNaN(a2)) {
        alert("Будь ласка, введіть коректні числові значення.");
    } else {
        const result = calculateMeans(a1, a2);
        alert(
            `Середнє арифметичне: ${result.arithmetic.toFixed(4)}\n` +
            `Середнє геометричне: ${result.geometric.toFixed(4)}\n` +
            `Середнє гармонійне: ${result.harmonic.toFixed(4)}`
        );
    }
} catch (e) {
    alert("Помилка: " + e.message);
}