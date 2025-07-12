/**
 * Buat sebuah fungsi bernama cetakTabel yang menerima satu
 * parameter angka n. Fungsi ini harus mencetak tabel perkalian
 * untuk angka n dari 1 sampai 10
 */

const cetakTabel = function(inputAngka){
    let hasil = ""; 
    if(typeof inputAngka != "number" || inputAngka < 0){
        const err = new Error("parameter harus bertipedata nomor dan harus nomor positif");
        throw err;
    } else {
        for(let i =1; i<=10; i++){ 
            let temp = 0;
            temp = inputAngka * i;
            hasil = hasil + `${inputAngka} x ${i} = ${temp} \n`;
        }
    }
    return hasil;
};

module.exports = {cetakTabel} ;

