// let currentDate = moment().format("dddd") + "" + moment().format("Do MMM YYYY");
// let currentHour = moment().format('h:mm:ss a');

function getHeaderDate() {
    let currentHeaderDate = moment().format("MMM Do YYYY H:ss");
    $("#currentDay").text(currentHeaderDate);
}
getHeaderDate()

let nineHour = $('#hour9');

let tenHour = $('#hour10');

let elevenHour = $('#hour11');

let twelveHour = $('#hour12');

let thirteenHour = $('#hour13');

let fourteenHour = $('#hour14');

let fifteenHour = $('#hour15');

let sixteenHour = $('#hour16');

let seventeenHour = $('#hour17');

let myHour = [
    {nineHour},

    {tenHour},

    {elevenHour},

    {twelveHour},

    {thirteenHour},

    {fourteenHour},

    {fifteenHour},

    {sixteenHour},

    {seventeenHour},

]


































// let today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY, H:mm"));