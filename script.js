$(document).ready(function () {
    $("#currentDate").text(moment().format('dddd, MMMM Do'));


    function timeUpdate() {
        $(".time").each(function () {
            $("textarea").addClass("pastTime")
        })
        $(".time").each(function() {
            $("textarea").addClass("presentTime")
        })
        $(".time").each(function() {
            $("textarea").addClass("futureTime")
        })


    }
    timeUpdate()
})


// var past = blocked Time();
// var present = red Time();
// var future = green Time();

document.write('It\'s now: ', hours, '<br><br>');
document.bgColor = "#808080";
//determine how to correct this code to change the background color
//past time
if (past > 17 && hours < 20) {
    document.write('<body style="background-color: grey">');
}
//current time
else if (hours > 19 && hours < 22) {
    document.write('<body style="background-color: red">');
}
//future time
else if (hours > 21 || hours < 5) {
    document.write('<body style="background-color: green;">');
}
