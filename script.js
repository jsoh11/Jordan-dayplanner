let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, H:mm"));
$timeBlock = $('time-block');

let now =  moment().format("H HH")

function rowColor() {

    if (hour) {
        $timeBlock > now
        $timeBlock.css("background-color", "lightgray")
    }
}
