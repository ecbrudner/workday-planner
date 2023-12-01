// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  // Code below displays current date in header
setInterval(()=>
  {
    var now= dayjs().format('MMMM D, YYYY h:mm A');
    document.getElementById('currentDay').textContent=now;
  
  }, 1000);

var timeBlocks= [
  { id:'hour-9', label: '9AM'},
  { id:'hour-10',label: '10AM'},
  { id:'hour-11',label: '11AM'},
  { id:'hour-12',label: '12PM'},
  { id:'hour-1', label: '1PM'},
  { id:'hour-2', label: '2PM'},
  { id:'hour-3', label: '3PM'},
  { id:'hour-4', label: '4PM'},
  { id:'hour-5', label: '5PM'}
];

var container= document.querySelector('.container-fluid px-5');

function createTimeBlock (){
  var timeBlockDiv= document.createElement('div');
  timeBlockDiv.id= timeBlocks.id;
  timeBlockDiv.className= 'row time-block';

  var hourDiv= document.createElement('div');
  hourDiv.className='col-2 col-md-1 hour text-center py-3';
  hourDiv.textContent= timeBlocks.label;

  var agendaTextArea= document.createElement('textarea');
  agendaTextArea.className= 'col-8 col-md-10 description';
  agendaTextArea.rows='3';

  var saveButton = document.createElement('button');
  saveButton.className= 'btn saveBtn col-2 col-md-1';
  saveButton.setAttribute('aria-label', 'save');

  var saveIcon= document.createElement('i');
  saveIcon.className='fas fa-save';
  saveIcon.setAttribute('aria-hidden', 'true');

  saveButton.appendChild(saveIcon);
  timeBlockDiv.appendChild(hourDiv);
  timeBlockDiv.appendChild(agendaTextArea);
  timeBlockDiv.appendChild(saveButton);

  container.appendChild(timeBlockDiv);
}

createTimeBlock();
});
