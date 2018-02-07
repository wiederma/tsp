var geocoder;

var map;

function init(a) {
    var b = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapContainer"), b);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: a
    }, function(a, b) {
        if (b === google.maps.GeocoderStatus.OK) {
            map.setCenter(a[0].geometry.location);
            var c = new google.maps.Marker({
                map: map,
                position: a[0].geometry.location
            });
        } else alert("init stop; Geocode was not successful for the following reason: " + b);
    });
}

function initialize(a) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: a
    }, function(a, b) {
        if (b == google.maps.GeocoderStatus.OK) {
            var c = {
                zoom: 12,
                center: a[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("mapContainer"), c);
        } else alert("initialize stop; Geocode was not successful for the following reason: " + b);
    });
}

function codeAddress(a) {
    geocoder.geocode({
        address: a
    }, function(a, b) {
        if (b == google.maps.GeocoderStatus.OK) {
            alert("" + a[0].geometry.location);
            return a[0].geometry.location;
        } else alert("code addr stop; Geocode was not successful for the following reason: " + b);
    });
}

function codeAddress2(a) {
    var b;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: a.adresse
    }, function(c, status) {
        if (status === google.maps.GeocoderStatus.OK) {
	    var mapOptions = {
		zoom: 12,
		center: c[0].geometry.location
	    }
            map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);

	    var contentString = '<h3><a href="' +
		a.link+
		'" target="_blank">' +
		a.name +
		'</a></h3><div><img src="'+
		a.pic+
		'" height="68" width="120"></div><ul>' +
		'<li>' +
		a.stadtteil +
		'</li>' +
		'<li>' +
		a.adresse +
		'</li>' +
		'<li>' +
		a.öffnungszeiten +
		'</li>' +
		'<li>' +
		a.geometry +
		'</li>' +
		'</ul>';

	    var infowindow = new google.maps.InfoWindow({
		content: contentString
	    });
            var marker = new google.maps.Marker({
                position: c[0].geometry.location,
                map: map,
                title: a.name
            });
	    marker.addListener('click', function() {
		infowindow.open(map, marker);
	    });

//            google.maps.event.addListener(e, "click", function() {
//                if (!b) b = new google.maps.InfoWindow();
//                if ("" == a.geometry) a.geometry = c[0].geometry.location;
//                b.setContent(d);
//                b.open(map, marker);
//            });
	    alert('done');
        } else {
		alert('code addr2 stop; Geocode was not successful for the following reason: ' + status);
	}
    });
}
