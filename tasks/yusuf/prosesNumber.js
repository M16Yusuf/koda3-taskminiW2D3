/**
 * buatlah sebuah fungsi prosesNumbers yang menerima array angka dan 
 * mengembalikan hasil perkalian semua angka ganjil dalam array,
 * atau 1 jika tidak ada angka ganjil.
 * 
 * processNumbers([1,2,3,4,5])
 * out 15
 * processnumbers([2,4,6,8])
 * out 1
 */

const prosesNumbers = function (inputArray){
    let temp = 1;
    for (let i = 0; i < inputArray.length; i++) {
        /* pengecekan ganjil genap
        jika genap ganti nilai index array dengan nilai 1 */
        if (inputArray[i] % 2 === 0) {
            inputArray[i] = 1;
        }
        // kalikan semua
        temp = temp * inputArray[i];
    }
    return temp;
}; 

module.exports = {prosesNumbers} ;


