// Завдання 1
function Task_1(x) {
    let errorsArr = [];
    let F;
    const a = 3;
    const b = 5;
    if (x < -2 || x > 9) { 
 errorsArr.push("Помилка: значення x поза допустимими межами (-2, 9).");
    }
       
     else if  (x > -2 && x <= 4) {
        F = Math.cos(x);
    }
    else if (x > 4 && x < 9) {
        if (Math.sqrt(a * x + b) < 0) {
            errorsArr.push("Помилка розрахунку: корінь з від'ємного числа")
            
        }
        F = Math.sqrt(a * x + b);
    }
    else if (x === 9) {
        F = Math.pow(x , 3) - b * x + 3;
    }
    for (let error of errorsArr) {
        console.log(error);
    }

    
    if (errorsArr.length === 0) {
        console.log("Результат f(x):", F);
    }

}

function Task_12(x) {
    let errorsArr = [];
    let F;
    const a = 3;
    const b = 5;
    if (x < -2 || x > 9) { 
 errorsArr.push("Помилка: значення x поза допустимими межами (-2, 9).");
    }
       
     else if  (x > -2 && x <= 4) {
        F = Math.cos(x);
    }
    else if (x > 4 && x < 9) {
        if (Math.sqrt(a * x + b) < 0) {
            errorsArr.push("Помилка розрахунку: корінь з від'ємного числа")
            
        }
        F = Math.sqrt(a * x + b);
    }
    else if (x === 9) {
        F = Math.pow(x , 3) - b * x + 3;
    }
     if (errorsArr.length > 0) {
        console.log("Виникли помилки:");
        for (let error of errorsArr) {
            console.log(error);
        }
    } else {
        console.log("Результат f(x):", F);
    }
}

// Завдання 2
function sequence(m) {
   for(let n = 1; n <= m; n++){
     s = ((Math.log(5*n)) + 1) / (2*n + 3);
    console.log( 'x_${n} = ${s}');
    }
}

function check() {
    let m = prompt("Введіть кількість членів послідовності (m >= 1):");
    m = parseInt(m);
    if (isNaN(m) || m < 1) {
    console.log("Помилка: введіть натуральне число (m >= 1).");
    return;
        }
        
        sequence(m);
}
check();

let x = 2;
Task_1(x);
Task_12(x);



