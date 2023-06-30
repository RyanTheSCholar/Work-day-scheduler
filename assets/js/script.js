// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton =$('.saveBtn');
var target = $('#content').children();
var hour = dayjs().hour();
var currentday;
console.log(target);
console.log(hour);
// var current = dayjs().format('dddd, MMMM D - hh:mm');
// console.log(dayjs().format());
// var time = $('.timer');
// time.text(current);

setInterval(() => {
    currentday = dayjs().format("dddd, MMM DD, YYYY, hh:mm:ss A");
    $(".timer").text(currentday);
  }, 1000);
    // for(i = 0; i < target.length; i++){
    //     console.log(target[i])
    // }
    $(target).each($(function(element){
        var el = $(element)
        var numAttr = parseInt(el.attr('number'));
        console.log(numAttr);

    }))
  


localArr = {
};
$(function () {
    
    // console.log(saveButton);
    saveButton.on("click", function(){
        // console.log(event.target);
        // console.log($(thisButton).parent())
        var saveText = $(this).parent().children().eq(1).val();
        console.log(saveText);
        console.log($(this).parent());
        // this parents id as opposed to the entire button
        localStorage.setItem("text", JSON.stringify(saveText));
        
        console.log(saveTextRetrieve);
        
        
    })
        var saveTextRetrieve = JSON.parse(localStorage.getItem("text"));
        $(saveButton).parent().children().eq(1).val(saveTextRetrieve);
 });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 
  