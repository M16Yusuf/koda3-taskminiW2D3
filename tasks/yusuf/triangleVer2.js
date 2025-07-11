/**
 * buatlah sebuah fungsi bernama triangle yang menerima satu prameter
 * bertipe data nomor dan harus nomor positif. Fungsi ini harus menampilkan
 * banyak karakter dengan nilai yang dimasukkan ke dalam parameter seperti contoh
 * 
 * triangle(-1)
 * "parameter harus bertipedata nomor dan harus nomor positif"
 * 
 * triangle("abc")
 * "parameter harus bertipedata nomor dan harus nomor positif"
 * 
 * triangle(1)
 * 1
 * 
 * triangle(2)
 * 1
 * 2 1
 * 
 * triangle(5)
 * 1
 * 21
 * 321
 * 4321
 * 54321
 */

const myTriangleVer2 = function (inputMasukan){
    if(typeof inputMasukan != "number" || inputMasukan < 0){
        return "parameter harus bertipedata nomor dan harus nomor positif";
    } else {
        for(let i = 0; i<inputMasukan; i++){
            let hasil = "";
            for(let i = 0; i<= inputMasukan; i++){
                let temp = "";
                for (let j = i; j >= 1; j--) {
                    temp = temp +" "+ j;
                }
                hasil = hasil+"\n"+temp ;
            }
            return hasil;
        }
    }
};

module.exports = {myTriangleVer2} ;

