saveBut = $(".saveBtn");
saveBut.each(function () {   
  $(this).on("click", function (event) {      
    timeSlot = event.target.parentNode.id;
    textArea = event.target.previousElementSibling; 
    localStorage.setItem(timeSlot, textArea.value);
  });
});
function showLocalStorage() {
  for ( i = 0; i < localStorage.length; i++) {    
    key = localStorage.key(i);
    eventText = localStorage.getItem(key);    
    textArea = $( "." + key) 
    textArea.val(eventText) 
  }
}
showLocalStorage()

window.setInterval(function () {
  $("#currentTime").html(moment().format("ddd MM/DD/YYYY H:mm:ss"));
}, 1000);

$(".time-block").each(function () { 
hour = moment().hours();
currentTime = parseInt($(this).attr("id"));  
  if (hour > currentTime) {
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (hour === currentTime) {
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});