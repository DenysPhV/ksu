// Оголошуємо змінні для зберігання ідентифікатора інтервалу та таймера зворотного відліку
let reminderInterval = null;
let countdownInterval = null; // Для зворотного відліку в консолі

// Функція для показу нагадування
function showReminder() {
    // Шукаємо існуюче повідомлення та видаляємо його
    const existingReminder = document.getElementById('reminderMessage');
    if (existingReminder) {
        existingReminder.remove();
    }

    // Створюємо новий елемент повідомлення
    const reminderDiv = document.createElement('div');
    reminderDiv.id = 'reminderMessage';
    reminderDiv.innerHTML = '<strong>🔔 Нагадування:</strong> Ви все ще на сайті! Не забудьте подивитися новий альбом Imagine Dragons!';
    
    // Додаємо стилі
    reminderDiv.style.position = 'fixed';
    reminderDiv.style.top = '20px';
    reminderDiv.style.right = '20px';
    reminderDiv.style.backgroundColor = '#e74c3c';
    reminderDiv.style.color = 'white';
    reminderDiv.style.padding = '15px 20px';
    reminderDiv.style.borderRadius = '8px';
    reminderDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    reminderDiv.style.zIndex = '1000';
    reminderDiv.style.animation = 'pulse 1s infinite';
    reminderDiv.style.fontFamily = 'Arial, sans-serif';

    // Додаємо повідомлення до тіла документа
    document.body.appendChild(reminderDiv);

    // Автоматично приховуємо повідомлення через 5 секунд
    setTimeout(() => {
        if (reminderDiv && reminderDiv.parentNode) {
            reminderDiv.style.opacity = '0';
            reminderDiv.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => {
                if (reminderDiv.parentNode) {
                    reminderDiv.remove();
                }
            }, 500);
        }
    }, 5000);
}

// Функція для запуску зворотного відліку в консолі
function startCountdown() {
    let secondsLeft = 120; // 2 хвилини = 120 секунд

    // Очищаємо попередній інтервал зворотного відліку, якщо він був
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    console.clear();
    console.log(`✅ Таймер запущено. Наступне нагадування через: ${secondsLeft} секунд`);

    countdownInterval = setInterval(() => {
        secondsLeft--;

        if (secondsLeft > 0) {
            // Оновлюємо рядок у консолі (використовуємо \r для повернення каретки)
            console.log(`⏳ Залишилось до нагадування: ${secondsLeft} секунд`);
        } else {
            // Коли відлік закінчився, очищаємо інтервал
            clearInterval(countdownInterval);
            console.log(`✅ Час вийшов! Нагадування показано.`);
        }
    }, 1000);
}

// Функція для запуску таймера
function startReminder() {
    if (reminderInterval) {
        alert('Таймер вже запущений!');
        return;
    }

    // Показуємо перше нагадування одразу
    showReminder();
    startCountdown(); // Запускаємо зворотний відлік

    // Запускаємо інтервал: кожні 2 хвилини (120000 мс)
    reminderInterval = setInterval(() => {
        showReminder();
        startCountdown(); // Перезапускаємо зворотний відлік після кожного нагадування
    }, 120000);

    // Оновлюємо стан кнопки
    const startBtn = document.getElementById('startReminderBtn');
    const stopBtn = document.getElementById('stopReminderBtn');
    
    if (startBtn) {
        startBtn.textContent = '✅ Таймер працює';
        startBtn.disabled = true;
    }
    
    if (stopBtn) {
        stopBtn.disabled = false;
    }

    alert('✅ Таймер нагадувань запущено!\nПерше нагадування з\'явиться через 2 хвилини.');
}

// Функція для зупинки таймера
function stopReminder() {
    if (reminderInterval) {
        clearInterval(reminderInterval);
        reminderInterval = null;
    }

    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    // Видаляємо активне повідомлення
    const existingReminder = document.getElementById('reminderMessage');
    if (existingReminder) {
        existingReminder.remove();
    }

    // Оновлюємо стан кнопки
    const startBtn = document.getElementById('startReminderBtn');
    const stopBtn = document.getElementById('stopReminderBtn');
    
    if (startBtn) {
        startBtn.textContent = '▶️ Запустити нагадування';
        startBtn.disabled = false;
    }
    
    if (stopBtn) {
        stopBtn.disabled = true;
    }

    console.clear();
    console.log('⏹️ Таймер нагадувань зупинено.');

    alert('⏹️ Таймер нагадувань зупинено.');
}

// Ініціалізація: додаємо кнопки при завантаженні сторінки
window.onload = function() {
    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }

    const startBtn = document.createElement('button');
    startBtn.id = 'startReminderBtn';
    startBtn.textContent = '▶️ Запустити нагадування';
    startBtn.style.margin = '10px';
    startBtn.style.padding = '12px 24px';
    startBtn.style.fontSize = '16px';
    startBtn.style.backgroundColor = '#27ae60';
    startBtn.style.color = 'white';
    startBtn.style.border = 'none';
    startBtn.style.borderRadius = '5px';
    startBtn.style.cursor = 'pointer';
    startBtn.onclick = startReminder;

    const stopBtn = document.createElement('button');
    stopBtn.id = 'stopReminderBtn';
    stopBtn.textContent = '⏹️ Зупинити нагадування';
    stopBtn.style.margin = '10px';
    stopBtn.style.padding = '12px 24px';
    stopBtn.style.fontSize = '16px';
    stopBtn.style.backgroundColor = '#e74c3c';
    stopBtn.style.color = 'white';
    stopBtn.style.border = 'none';
    stopBtn.style.borderRadius = '5px';
    stopBtn.style.cursor = 'pointer';
    stopBtn.disabled = true;
    stopBtn.onclick = stopReminder;

    footer.appendChild(startBtn);
    footer.appendChild(stopBtn);

    // Додаємо анімацію pulse до head, якщо її ще немає
    if (!document.querySelector('style#pulse-animation')) {
        const style = document.createElement('style');
        style.id = 'pulse-animation';
        style.innerHTML = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
};