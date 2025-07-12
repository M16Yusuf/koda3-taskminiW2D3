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
const { myTriangle } = require("./tasks/yusuf/triangle.js");
const { useCountArray } = require("./tasks/yusuf/countArray.js");
const { myTriangleVer2 } = require("./tasks/yusuf/triangleVer2.js");
const { prosesNumbers } = require("./tasks/yusuf/prosesNumber.js");
const { cetakTabel } =require("./tasks/yusuf/cetakTabel.js");
const { buatRentang } = require("./tasks/yusuf/buatRentang.js");
// panggil nomor 1 
console.log(myTriangle(5));
// panggil nomor 2 dan asign nilai
console.log(useCountArray([1,4,5,6,4,6])); // hasil = 2880
// panggil nomor 3 
console.log(myTriangleVer2(5));
// panggil nomor 4
console.log(prosesNumbers([1,2,3,4,5])); // hasil 15
// panggil nomor 5
console.log(cetakTabel(5));
// panggil nomor 6
console.log(buatRentang(1, 5));
