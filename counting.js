var Counter = document.querySelector(".website-counter");
var Visit = localStorage.getItem("page_view");

if (Visit) {
  Visit = Number(Visit) + 1;
  localStorage.setItem("page_view", Visit);
} else {
  Visit = 1;
  localStorage.setItem("page_view", 1);
}
Counter.innerHTML = Visit;

function Reset() {
    var reset = new Date();
    reset.setHours(24,0,0,0);
    var t = reset.getTime() - Date.now();
    setTimeout(function(){
        Visit = 1;
        localStorage.setItem("page_view", 1);
        Counter.innerHTML = Visit;
        Reset();
    }, t);
}
Reset();