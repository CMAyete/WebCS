// What year are we in now?
var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;

// Set the date we're counting down to.
//var target_date = new Date("Jan 1, " + next_year).getTime();
 //var target_date = new Date(2013,12,21);
var target_date = new Date("February 28, 2014 20:00:00");



// Variables for time units.
var days
 
// Get the elements that will hold the numbers.
var $days = document.getElementById("d");

// Calculate the countdown clock and set the HTML.
function update() {
    // Find the amount of "seconds" between now and target.
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // Do some time calculations.
    //seconds_left = seconds_left % 86400;
    
    days = parseInt(seconds_left / 86400);
     
    // Format the number strings and put them in the elements.
    $days.innerHTML = pad(days, 2)
}

// Immediately update the HTML.
// The white boxes are blank otherwise.
update();

// Now update our number elements every 1 second.
setInterval(update, 1000); // 1000 milliseconds = 1 second

// This looks much better with leading zeros, don't you agree?
// If num has less than size digits, add enough 0s to the front.
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}