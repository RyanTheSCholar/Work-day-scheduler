// Wrap all code that interacts with the DOM in a call to jQuery to ensure that in the html.
$(function () {
var clearButton = $('.clearBtn')
var saveButton =$('.saveBtn');
var target = $('#content').children();
var hour = dayjs().hour();
var currentday;
console.log(target);
console.log(hour);
// var text =$('textarea');
// text = '';
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
    target.each(function (index, element) {
        var el = element;
        console.log(element);
        var numAttr = parseInt($(el).attr("data-number"));
        console.log(numAttr);
        if (numAttr === hour) {
          $(el).addClass("present");
          $(el).removeClass("past");
          $(el).removeClass("future");
        } else if (numAttr > hour) {
          $(el).addClass("future");
          $(el).removeClass("past");
          $(el).removeClass("present");
        } else {
          $(el).addClass("past");
          $(el).removeClass("future");
          $(el).removeClass("present");
        }
      });
      clearButton.on('click', (function(){
        localStorage.clear();
      }))


// const local = {
//     key: target.children().attr('id'), 
//     value: $('textarea').text()
// };
// target.each( function (element) {
//     var textEl = element;
//     console.log(element);
//     var textAttr = parseInt($(textEl).attr("text"));
//     console.log(textAttr);
// })
// create a function for targeting each div element then plug my function into my eventlistener
        
    // var textEl = element;
    // console.log(element);
    // var textAttr = parseInt($(textEl).attr("text"));
    // console.log(textAttr);
    // console.log(saveButton);
    saveButton.on("click", (function(index, element){
        // console.log(event.target);
        // console.log($(thisButton).parent())
        var saveText = $(this).parent().children().eq(1).val();
        console.log(saveText);
        console.log($(this).parent().attr('data-number'));
        // console.log($(this).parent());
        // this parents id as opposed to the entire button
        console.log(target);
        localStorage.setItem($(this).parent().attr('id'), JSON.stringify(saveText));
        
        
    })); 
        // var saveTextRetrieve = JSON.parse(localStorage.getItem());
        // saveButton.parent().children().eq(1).val(saveTextRetrieve);

        $('#hour-9').children().eq(1).val(JSON.parse(localStorage.getItem('hour-9')));
        $('#hour-10').children().eq(1).val(JSON.parse(localStorage.getItem('hour-10')));
        $('#hour-11').children().eq(1).val(JSON.parse(localStorage.getItem('hour-11')));
        $('#hour-12').children().eq(1).val(JSON.parse(localStorage.getItem('hour-12')));
        $('#hour-13').children().eq(1).val(JSON.parse(localStorage.getItem('hour-13')));
        $('#hour-14').children().eq(1).val(JSON.parse(localStorage.getItem('hour-14')));
        $('#hour-15').children().eq(1).val(JSON.parse(localStorage.getItem('hour-15')));
        $('#hour-16').children().eq(1).val(JSON.parse(localStorage.getItem('hour-16')));
        $('#hour-17').children().eq(1).val(JSON.parse(localStorage.getItem('hour-17')));

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
    // the values of the corresponding textarea $(el)ements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 
  