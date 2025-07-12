/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "Muhammad Yusuf"
 */

// import your tasks here
const yusuf = require("./tasks/yusuf");


function taskyusuf(){
    // pangggil tugas nomor 1
    // test error
    try {
        const res = yusuf.myTriangle("ABC");
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
    // test benar
    console.log(yusuf.myTriangle(5));
    
    
    // panggil tugas nomor 2
    // panggil nomor 2 dan asign nilai
    console.log(yusuf.useCountArray([1,4,5,6,4,6])); // hasil = 2880

    
    // panggil tugas nomor 3
    // test error 
    try{
        const result = yusuf.myTriangleVer2("abc");
        console.log(result);
    } catch (error){
        console.log(error.message);
    }
    // test benar
    console.log(yusuf.myTriangleVer2(5));


    // panggil tugas nomor 4
    // panggil nomor 4
    console.log(yusuf.prosesNumbers([1,2,3,4,5])); // hasil 15


    // panggil tugas nomor 5
    // test error 
    try{
        const resultTab = yusuf.cetakTabel("abc");
        console.log(resultTab);
    }catch(err){
        console.log(err.message);
    }
    // test suksess
    console.log(yusuf.cetakTabel(5));


    // panggil tugas nomor 6
    // panggil nomor 6
    console.log(yusuf.buatRentang(1, 5));

}
taskyusuf();


// task nomor 7 
/**
 * a. uncaught referenceError: user is not defined. 
 *    variable user tidak terdefinisi, mungkin karena 
 *    belum di deklarasikan variabelnya atau mungkin karena 
 *    memanggil variable tersebut diluar scoop.
 * 
 * b. TypeError: cannot read properties of null (reading 'length'),
 *    error karena ingin mengakses variabel array yang masih kosong.
 * 
 * c. syntaxError : unexpected token ')', 
 *    error penulisan program karena kelebihan tanda ")" yang 
 *    membuat struktur program jadi berubah.
 * 
 * d. Typeerror : cannot set properties of undfined (setting 'status'), 
 *    error  ketekia mencoba memasukan nilai "status" ke dalam object 
 *    dengan key 'setting' yang tidak terdefinisi.
 * 
 * e. RangeError: Maximum call stack size exceeded, 
 *    error Ketika fungsi recursive (fungsi yang memanggil 
 *    dirinya sendiri), terus looping tanpa kondisi stop hingga 
 *    program tidak ada memory untuk memproses perulangan tersebut
 */
