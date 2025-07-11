/**
 * buatlah sebuah fungsi bernama countArray yang menerima parameter yang bertipe
 * data array of integer. Fungsi ini harus mengalikan semua element di dalam 
 * array tersebut.
 */

const useCountArray = function (inputArray) {
    let hasil = 1;
    for(let i = 0; i<inputArray.length; i++){
        hasil = hasil * inputArray[i];
    }
    return hasil;
};

module.exports = {useCountArray} ;
