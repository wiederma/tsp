tsp - travelling salesman problem
========================

In this repo a variant of the travelling salesman problem is discussed. Using some
scripting with Python, AJAX, and JSON a list of places is displayed on a google map.
This helps to illustrate distances and find suitable stations of public transport
to reach certain spots.

In this specific instance, all public swimming pools are of interest. To find them,
they are presented in a html file called baeder.html with additional information
retrived from the offical webpages.

In order to get these scripts running, you need to have a webserver to provide the html
files and handle the XMLHttpRequest stuff.

To keep it simple, git clone the repository to some folder and start a python
based webserver:
python -m SimpleHTTPServer

Now, use your browser and open localhost:8000, click on baeder.html and you should
see a google map of Munich presenting the public swimming pools managed by the
local municipal works (SWM)

Feedback is welcomed ... enjoy :D
