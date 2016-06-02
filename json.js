function getJSON (file, callback)
{
	var request = AjaxRequest();

	request.onreadystatechange = function()
	{
		if(request.readyState==4 && request.status==200)
		{
			callback(request.responseText);
		}
		else{
			//alert("request.readyState " + request.readyState + " request.status "+ request.status);
		}
	}
	request.open("GET", file, true);
	request.send();
}

getJSON("bad.json", function(data) {

	//use data, your json object/data
  var jsondata=eval("("+data+")"); //retrieve result as an JavaScript object
	var rssentries=jsondata.items;

	//var output='<ul>';
	//for (var i=0; i<rssentries.length; i++) {
	//	output+='<li>';
	//	output+='<a href="'+rssentries[i].link+'">';
	//	output+=rssentries[i].name+'</a>';
	//	output+='</li>';
	//}
	//output+='</ul>';

	//var infoWindow;

	rssentries.forEach(function(element, index, array) {
		codeAddress2(element);
	});

	//document.getElementById("result").innerHTML=output;
	//alert("it is running");
});
