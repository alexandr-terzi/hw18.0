const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

let arr = new Array;
for(let i = 0; i < characters.length; i++) {
    arr.push(characters.charAt(i));
}
console.log(arr)

let arr1 = new Array;

function generateKey (length, arr) {
    for (let i = 0; i < length; i++) {
        arr1.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return arr1.join('');
}

const key = generateKey(16, arr);
console.log(key); // eg599gb60q926j8i
