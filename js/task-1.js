function slugify(title){
    const loverTitle = title.toLowerCase(); /*створюємо константу loverTitle, у якій перетворюємо  title у нижній рєєстр */
    const wordTitle=loverTitle.split(" "); /*створюємо константу  wordTitle щоб перевезти дані константи loverTitle у масив по елементам */
    const senTitle = wordTitle.join("-");/*створюємо константу senTitle для збирання елементів масиву wordTitle у речення з розділювачем тире */
     return senTitle ;/* повертаємо змінну senTitle */
    
    }

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"