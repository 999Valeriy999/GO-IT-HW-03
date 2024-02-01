function filterArray(numbers, value) {
    let newArr = [];       /*створюємо пустий масив */
    for(let number of numbers) { /* створюємо змінну number в ній буде зберігатися елемент  масиву. 
    numbers -назва масиву */
    if(number > value) /*порівнюємо елемент масиву і значення value приклад 1<3 */
    newArr.push(number) /* додаємо через push в новий масив елементи, які були накопиченні в змінній number */
     }
     return newArr; /*повертаємо новий масив */
    }
    
    
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/* console.log містить значення, які будуть введені при виклику функції FilterArrey [значення масиву], 
після значення  value*/