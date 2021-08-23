const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("date").innerHTML 
= d.getFullYear()+ " "+months[d.getMonth()] + " "+ d.getDate()+ " "+ days[d.getDay()];

function ubahbg() {
	document.body.style.backgroundColor = document.getElementById("ubah").value;
}

class C {
	constructor() {}

function validate(evt) {
      var theEvent = evt || window.event;

      // Handle paste
      if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    }
    function select() {
      document.getElementById("num1").value = "";
      document.getElementById("result").value = "";
    }

    class C {
	constructor() {}

    const convert = new Convert();
    function conv() {
      if (document.getElementById("from").value == "cel") {
        const res = convert.fromCelcius(
          document.getElementById("to").value,
          parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
      }
      if (document.getElementById("from").value == "rea") {
        const res = convert.fromReamur(
          document.getElementById("to").value,
          parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
      }
      if (document.getElementById("from").value == "far") {
        const res = convert.fromFarenheit(
          document.getElementById("to").value,
          parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
      }
    }




window.setTimeout("startTime()",1000);

    function startTime() {
        
        setTimeout("startTime()",1000);
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }