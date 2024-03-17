var btnFormat = document.getElementById('btnFormat');
var hrs = document.getElementById('hrs');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var amPm = document.getElementById('amPm');
let twelve;
let twentyFour;

const formatTwelve = () => {
    const date = new Date();

    // setting twelve hours format (12 hours format)
    let hours = date.getHours() % 12;

    //set AM/PM
    let newAmPM = date.getHours() >= 12 ? "PM" : "AM";

    hrs.innerHTML = hours;
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    amPm.innerHTML = newAmPM;
}

const runTwelve = () => {
    twelve = setInterval(formatTwelve, 1000);
}

const stopRunTwelve = () => {
    clearInterval(twelve);
}

runTwelve();

const formatTwentyFour = () => {
    const date = new Date();
    hrs.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    amPm.innerHTML = "";
}

const runTwentyFOur = () => {
    twentyFour = setInterval(formatTwentyFour, 1000);
}

const stopTwentyFOur = () => {
    clearInterval(twentyFour);
}

btnFormat.addEventListener('click', () => {
    const string_12 = "12 hours format";
    const string_24 = "24 hours format";

    //toggel button text
    btnFormat.innerHTML = btnFormat.innerHTML == string_12 ? string_24 : string_12;

    //clear time interval
    btnFormat.innerHTML == string_24 ? stopRunTwelve() : stopTwentyFOur();

    //settting time format (12hours / 24hours)
    btnFormat.innerHTML == string_24 ? runTwentyFOur() : runTwelve();
})