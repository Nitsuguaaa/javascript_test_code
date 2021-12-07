function cdate() {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    document.getElementById("cdate").innerHTML = "<div id=\"test\">Current date:</br>" + date + "</div>";
}
function bdate() {
    document.getElementById("bdate").innerHTML = "<div id=\"test\">My Birthday:</br> 2021/12/19 </div>";
}
function hdate() {
    document.getElementById("hdate").innerHTML = "";
    const holidays = ["List of holidays:", "·12/25 - Christmas", "·11/1 - All Saints Day", "·6/12 - Independence day", "·1/1 - New Year", "·4/2 - Good Friday"];

    for (var i=0; i<holidays.length; i++) {
        document.getElementById("hdate").innerHTML += "<div id=\"test\">"+ holidays[i] + "</br></div>";
    }
}