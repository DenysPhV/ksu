// Рекурсивна функція для обчислення C(n, m)
function C(n, m) {
    if (m === 0 || m === n) {
        return 1;
    }
    return C(n - 1, m) + C(n - 1, m - 1);
}

// Основна логіка: введення → перевірка → виведення
try {
    const nInput = prompt("Введіть n (n ≥ 0):");
    const mInput = prompt("Введіть m (0 ≤ m ≤ n):");

    const n = parseInt(nInput, 10);
    const m = parseInt(mInput, 10);

    if (isNaN(n) || isNaN(m) || n < 0 || m < 0 || m > n) {
        alert("Некоректні дані. Переконайтеся, що 0 ≤ m ≤ n.");
    } else {
        const result = C(n, m);
        alert(`C(${n}, ${m}) = ${result}`);
    }
} catch (e) {
    alert("Помилка: " + e.message);
}