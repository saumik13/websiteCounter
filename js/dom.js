
let futureDate = new Date("March 5, 2021 12:00:00").getTime();

function milliTodays(timeDiff){
    let days = timeDiff / (1000 * 60 * 60 * 24);
    return days
}

function milliTohours(timeDiff) {
    let hours = (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    return hours;

}
function milliTominutes(timeDiff) {
    let minutes = (timeDiff % (1000 * 60 * 60)) / (1000 * 60);
    return minutes;

}
function milliToseconds(timeDiff) {
    let seconds = (timeDiff % (1000 * 60)) / 1000;
    return seconds;

}

function countdownTimer() {


    let now = new Date().getTime();

    let timeDifference = futureDate - now;

    // Converting from millis to appropriate units
    let days = Math.floor(milliTodays(timeDifference));
    let hours = Math.floor(milliTohours(timeDifference));
    let minutes = Math.floor(milliTominutes(timeDifference));
    let seconds = Math.floor(milliToseconds(timeDifference));

    document.getElementById("countdown").innerHTML = days + " days ";
    document.getElementById("countdownhours").innerHTML = hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";


}


setInterval(countdownTimer, 1000);



