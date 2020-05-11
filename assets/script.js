var currentTime = moment().hours();

//write a function that targets .time-block
$('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id'));
    if (blockHour < currentTime) { 
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    }
    else if (currentTime === blockHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    }
    else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});

//when save button is clicked text area will be saved to local storage
$(".saveBtn").click(function () {
 var timeBlock = $(this).parent().attr('id');
 var valBlock = $(this).siblings(".description").val();
 localStorage.setItem(timeBlock, valBlock);
})
//Render local storage
$('#9 .description').val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
//date on the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));