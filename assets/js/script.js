$(document).ready(function () {


});

var schedule = [];

// Current day is displayed on top of page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

// Colorizes text blocks to represent hours of day
var time = function () {

    var currentHour = moment().hour();

    var textAreas = document.querySelectorAll('.description');

    for (var i = 0; i < textAreas.length; i++) {

        if (textAreas[i].id.split('-')[1] < currentHour) {
            textAreas[i].classList.add('past');
        } else if (textAreas[i].id.split('-')[1] == currentHour) {
            textAreas[i].classList.add('present');
        } else {
            textAreas[i].classList.add('future');

        }
    }
}

// Local Storage
$('.saveBtn').click(function (event) {

    var hourVal = event.currentTarget.previousElementSibling.id;
    var textVal = event.currentTarget.previousElementSibling.value;
    var temp = localStorage.getItem('schedule');
    var exists = false;

    if (textVal != "\n      ") {

        if (temp != null) {
            schedule = JSON.parse(temp);

            for (var i = 0; i < schedule.length; i++) {
                if (schedule[i].hour == hourVal) {
                    schedule[i].text = textVal;
                    exists = true;
                } else {

                }
            }
        }

        if (exists == false) {
            var occurence = {
                hour: hourVal,
                text: textVal
            };


            schedule.push(occurence);
        }

        localStorage.setItem('schedule', JSON.stringify(schedule));
    } else {

    }

});

// print LocalStorage
var printLocal = function () {
    var temp = localStorage.getItem('schedule');

    if (temp != null) {
        schedule = JSON.parse(temp);

        for (var i = 0; i < schedule.length; i++) {
            var textAreaEl = document.querySelector("#" + schedule[i].hour);
            textAreaEl.textContent = schedule[i].text;
        }
    }
}

time();
printLocal();