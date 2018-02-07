
var geocoder;
var map;

function init(address) {
	var mapOptions = {
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById('mapContainer'), mapOptions);

	geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': address}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);

			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});

		} else {
			alert('init stop; Geocode was not successful for the following reason: ' + status);
		}
	});
}

function initialize(address) {
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': address}, function(results, status) {
	  if (status == google.maps.GeocoderStatus.OK) {
	    var mapOptions = {
				zoom: 12,
				center: results[0].geometry.location,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);
	  } else {
	    alert("initialize stop; Geocode was not successful for the following reason: " + status);
	  }
	});
}

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
//	    map.setCenter(results[0].geometry.location);
			alert(""+results[0].geometry.location);
			return results[0].geometry.location;
		} else {
			alert("code addr stop; Geocode was not successful for the following reason: " + status);
		}
	});
}

function codeAddress2(element) {
	var infoWindow;
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': element.adresse}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
//			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				position: results[0].geometry.location,
				map: map,
				title: element.name
			});
			google.maps.event.addListener(marker, 'click', function() {
				if (!infoWindow) {
					infoWindow = new google.maps.InfoWindow();
				}

				if(element.geometry == "") {
					element.geometry = results[0].geometry.location;
				}

				var content = '<h3><a href="'+element.link+'" target="_blank">' + element.name + '</a></h3><div><img src="'+element.pic+'" height="68" width="120"></div><ul>' + '<li>' + element.stadtteil + '</li>' + '<li>' + element.adresse + '</li>' + '<li>' + element.öffnungszeiten + '</li>' + '<li>' + element.geometry + '</li>' + '</ul>';
				infoWindow.setContent(content);
				infoWindow.open(map, marker);
			});
		} else {
			alert("code addr2 stop; Geocode was not successful for the following reason: " + status);
		}
	});
}
