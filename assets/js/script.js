$(document).ready(function () {

});

// Current day is displayed on top of page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

// Colorizes text blocks to represent hours of day
var time = function () {
    var hours = document.querySelector('.container');

    var totalHours = hours.children.length;
    console.log("🚀 ~ file: script.js ~ line 8 ~ totalHours", totalHours)

    var currentHour = moment().hour();
    console.log("🚀 ~ file: script.js ~ line 11 ~ currenHour", currentHour)

    var textAreas = document.querySelectorAll('.description');
    console.log("🚀 ~ file: script.js ~ line 14 ~ textAreas", textAreas)

    for (var i = 0; i < textAreas.length; i++) {

        console.log(textAreas[i].id);

        if (textAreas[i].id.split('-')[1] < currentHour) {
            textAreas[i].classList.add('past');
        } else if (textAreas[i].id.split('-')[1] == currentHour) {
            textAreas[i].classList.add('present');
        } else {
            textAreas[i].classList.add('future');

        }
    }
}
time();