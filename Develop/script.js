$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var container= document.querySelector('.container-fluid.px-5');


  setInterval(()=> {
    var now= dayjs().format('MMMM D, YYYY h:mm A');
    document.getElementById('currentDay').textContent=now;
  }, 1000);

  var timeBlocks= [
    { id:'9-hour', label: '9AM'},
    { id:'10-hour',label: '10AM'},
    { id:'11-hour',label: '11AM'},
    { id:'12-hour',label: '12PM'},
    { id:'13-hour', label: '1PM'},
    { id:'14-hour', label: '2PM'},
    { id:'15-hour', label: '3PM'},
    { id:'16-hour', label: '4PM'},
    { id:'17-hour', label: '5PM'}
  ];

  var currentHour= dayjs().hour();

  for (var i=0; i < timeBlocks.length; i++){
    createTimeBlock(timeBlocks[i]);
  }

  function createTimeBlock (timeBlocks){
    var timeBlockDiv= document.createElement('div');
    timeBlockDiv.id= timeBlocks.id;
    timeBlockDiv.className= 'row time-block';

    var hourDiv= document.createElement('div');
    hourDiv.className='col-2 col-md-1 hour text-center py-3';
    hourDiv.textContent= timeBlocks.label;

    var agendaTextArea= document.createElement('textarea');
    agendaTextArea.className= 'col-8 col-md-10 description';
    agendaTextArea.rows='3';
    agendaTextArea.id= 'agenda'+[i];
    if (parseInt(timeBlocks.id) < currentHour){
      agendaTextArea.className = 'past';
    } else if (parseInt(timeBlocks.id) > currentHour){
      agendaTextArea.className = 'future';
    } else {
      agendaTextArea.className = 'present';
    }

    var saveButton = document.createElement('button');
    saveButton.className= 'btn saveBtn col-2 col-md-1';
    saveButton.setAttribute('aria-label', 'save');
    saveButton.addEventListener('click',saveText);

    var textAreaValue;
    var timeBlockId;

    function saveText(event){
      timeBlockId= this.parentElement.id;
      textAreaValue= $(this.parentElement).find('.description').val();
      localStorage.setItem(timeBlockId, JSON.stringify(textAreaValue));
      agendaTextArea.value= JSON.parse(localStorage.getItem(timeBlockId));
    }
    
    var saveIcon= document.createElement('i');
    saveIcon.className='fas fa-save';
    saveIcon.setAttribute('aria-hidden', 'true');

    saveButton.appendChild(saveIcon);
    timeBlockDiv.appendChild(hourDiv);
    timeBlockDiv.appendChild(agendaTextArea);
    timeBlockDiv.appendChild(saveButton);

    container.appendChild(timeBlockDiv);
  }

  

});

