var currentTime = moment().hours()
//psuedo code
//write a function that tirgets .time-block
$('.time-block').each(function() {
    var blockHour = $(this).attr('id')
    console.log(blockHour);
    // and is going to compare currentTime and id of the time block 
    //if currentime > id of the time block => .addClass('pasr) else if current = id of the block .removeClass('past) .addClass('present')
    // else rm past rm present addd future
    
    
})

//event button on save button
//when save button is clicked text area will be saved to local storage
$(".saveBtn").click(function () {
 var timeBlock = $(this).parent().attr("id")
 var valBlock = $(this).siblings(".description").val()
 localStorage.setItem(timeBlock, valBlock)
})
//Render local storage
$('#9 .description').val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem("10"));
//Add a date on the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"))