function isArmstrongNumber(num) {
    // Перетворюємо число в рядок, щоб отримати кількість цифр
    const strNum = num.toString();
    const numberOfDigits = strNum.length;
    let sum = 0;

    // Проходимо по кожній цифрі
    for (let i = 0; i < numberOfDigits; i++) {
        const digit = parseInt(strNum[i]);
        sum += Math.pow(digit, numberOfDigits);
    }

    // Перевіряємо, чи є число Armstrong'овим
    if (sum === num) {
        console.log(`Число ${num} є Armstrong'овим`);
    } else {
        console.log(`Число ${num} не є Armstrong'овим`);
    }
}

// Приклад використання
isArmstrongNumber(153); // Число є Armstrong'овим
isArmstrongNumber(123);
isArmstrongNumber(6);// Число не є Armstrong'овим