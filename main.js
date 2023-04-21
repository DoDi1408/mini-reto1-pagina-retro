function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("bt1").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajax.txt");
    xhttp.send();
}

$(document).ready(function(){
    $("#button2").click(function(){
      $("p").text("Hello world!");
    });
  });