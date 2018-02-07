function getJSON(a, b) {
    var c = AjaxRequest();
    c.onreadystatechange = function() {
        if (4 == c.readyState && 200 == c.status) b(c.responseText); else ;
    };
    c.open("GET", a, true);
    c.send();
}

getJSON("bad.json", function(data) {
    var jsondata = eval("(" + data + ")");
    var rssentries = jsondata.items;
    rssentries.forEach(function(a, b, c) {
        codeAddress2(a);
    });
});
