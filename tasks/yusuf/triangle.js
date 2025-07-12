/** 
 * buat sebuah fungsi bernama triangle yang menerima suatu parameter 
 * bertipe data nomor dan harus nomor positif. Fungsi ini harus 
 * menampilkan banyak karakter dengan nilai yang dimasukan ke dalam 
 * parameter seperti contoh :
 */

// function membuat segitiga
const myTriangle = function(inputan){
    // validari inputan harus number
    if(typeof inputan == "number" || inputan > 0){
        // validasi inputan harus positif
        if (inputan < 0 ) {
            return msgVal;
        }
        let hasil = "";
        for(let i = 0; i<= inputan; i++){
            
            let temp = "";
            for (let j = i; j >= 1; j--) {
                temp = j+" "+temp;
            }
            hasil = hasil+"\n"+temp ;
        }
        return hasil;
    } else {
        throw new Error("parameter harus bertipe data nomor, dan nomor harus positif");
    }
};

module.exports = {myTriangle} ;


