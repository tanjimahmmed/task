var comingdate = new Date("oct 30, 2019 00:00:00");
var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');
var x = setInterval(function() {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();
    var Days = Math.floor(des / (1000 * 60 * 60 * 24));
    var Hour = Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var Min = Math.floor(des % (1000 * 60 * 60 ) / (1000 * 60));
    var sec = Math.floor(des % (1000 * 60) / 1000);
    d.innerHTML = getTrueNumber(Days);
    h.innerHTML = getTrueNumber(Hour);
    m.innerHTML = getTrueNumber(Min);
    s.innerHTML = getTrueNumber(sec);
    if (des <= 0) clearInterval(x);
}, 1000);
function getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}


