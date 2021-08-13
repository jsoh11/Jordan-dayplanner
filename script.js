let currentDate = moment().format("dddd") + "" + moment().format("Do MMM YYYY");
let currentHour = moment().format('h:mm:ss a');

let mainTime = setInterval( function(){
    let timeNow= moment();
    $("#currentDay").html(timeNow.format("YYY MMM DD") + " "
    + timeNow.format("dddd")
    .substring(0.3).toUpperCase());
    $("currentDay").html(currentDate + " " + timeNow.format("hh:mm:ss A"));
}, 1000);



let nineHour = $('#hour9');

let tenHour = $('#hour10');

let elevenHour = $('#hour11');

let twelveHour = $('#hour12');

let thirteenHour = $('#hour13');

let fourteenHour = $('#hour14');

let fifteenHour = $('#hour15');

let sixteenHour = $('#hour16');

let seventeenHour = $('#hour17');

let hour= .moment().hour()

let myHour = [
    { nineHour },

    { tenHour },

    { elevenHour },

    { twelveHour },

    { thirteenHour },

    { fourteenHour },

    { fifteenHour },

    { sixteenHour },

    { seventeenHour },

]

function background() {

    $("<textarea>").each(function () {

        if (myHour > hour) {
            $(this).addClass("past");
        } else if (myHour < hour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

































// let today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY, H:mm"));