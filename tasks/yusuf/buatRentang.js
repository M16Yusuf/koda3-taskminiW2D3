/**
 * buatlah sebuah fungsi bernama buatRentang yang menerima 
 * dua parameter angka angka, mulai dan selesai. fungsi ini
 * harus melakukan output semua angka bulat dari mulai hingga
 * selesai yang dipisahkan oleh simbol koma.
 * buatRentang(1,5);
 * out 1,2,3,4,5;
 */

const buatRentang = function (mulai, selesai){
    let hasil = "";
    for(let i = mulai; i <= selesai; i++){
        // if pengecekan string masuk kosong
        // push nilai tanpa koma
        if(hasil == ""){
            hasil = `${i}`;
            continue;
        }
        // push nilai dengan koma
        hasil = `${hasil}, ${i}`;
    }
    return hasil; // returnkan nilai hasil
};

module.exports = {buatRentang} ;
