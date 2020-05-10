var currentTime = moment().hours();

//write a function that targets .time-block
$('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id'));
    console.log(currentTime > blockHour);
    if (currentTime > blockHour) { 
        $('.description').removeClass('future');
        $('.description').removeClass('present');
        $('.description').addClass('past');
    }
    else if (currentTime === blockHour) {
        $('.description').removeClass('future');
        $('.description').removeClass('past');
        $('.description').addClass('present');
    }
    else {
        $('.description').removeClass('past');
        $('.description').removeClass('present');
        $('.description').addClass('future');
    }
})

//when save button is clicked text area will be saved to local storage
$(".saveBtn").click(function () {
 var timeBlock = $(this).parent().attr("id")
 var valBlock = $(this).siblings(".description").val()
 localStorage.setItem(timeBlock, valBlock)
})
//Render local storage
$('#9 .description').val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("13"));
$("#2 .description").val(localStorage.getItem("14"));
$("#3 .description").val(localStorage.getItem("15"));
$("#4 .description").val(localStorage.getItem("16"));
$("#5 .description").val(localStorage.getItem("17"));
//date on the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));