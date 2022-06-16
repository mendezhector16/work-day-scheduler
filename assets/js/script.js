//display current date 
var todaysDateEl = moment().format("MMMM-DD-YYYY");

//append date to the top of calendar
$("#currentDay").html(todaysDateEl);


//blocks of time for standard business hours (9-5pm)