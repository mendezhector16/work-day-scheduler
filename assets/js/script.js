//display current date 
var todaysDateEl = moment().format("MMMM-DD-YYYY");
var currentTime = moment().hour();
var tasks = [];

//append date to the top of calendar
$("#currentDay").html(todaysDateEl);

//save tas to local storage
var saveTasks = function() {
    localStorage.setItem()
}
//color code time slots depending on past, present, or future
//loop throght the time
$(".time-block").each(function() {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock === currentTime) {
        $(this).addClass("present");
    } 
    else if (timeBlock > currentTime) {
        $(this).addClass("future");   
    }
    else {
        $(this).addClass("past");
    };
});
