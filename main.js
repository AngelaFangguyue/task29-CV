var wenzi = document.getElementById("wenzi");
var test = document.getElementById("test");
var i = 0;
var id = setInterval(function() {
  if (i < 20) {
    wenzi.innerHTML = i;
    i++;
  } else {
    clearInterval(id);
  }
}, 1000);
// setTimeout(() => {
//   wenzi.innerHTML = i;
//   i++;
// }, 1000);
//wenzi.innerHTML = "fgy";
