function srvTime(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD',url,false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send(null);
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime("https://www.google.es/");
var date = new Date(st);

function testOnline(fn) {
    var script = document.createElement(‘script’)
    script.src = 'online.js';
    // alias the setOnline function to the new function that was passed in
    window.setOnline = function (online) {
        document.body.removeChild(script);
        fn(online);
    };

    // attaching script node trigger the code to run
    document.body.appendChild(script);
}

testOnline(function (online) {
    if (online) {
        applicationCache.update();
    } else {
        // show users an unobtrusive message that they're disconnected
    }
});
