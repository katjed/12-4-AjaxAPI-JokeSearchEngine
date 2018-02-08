var cors = 'https://cors-anywhere.herokuapp.com/',
    url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
	getJoke();
});

var paragraph = document.getElementById('joke');

getJoke();

function getJoke() {
 	var xhr = new XMLHttpRequest();
	xhr.open('GET', cors + url);	
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
  	});
  	xhr.send();
}

// jQuery
/*
var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
	$.ajax({
		method: 'GET',
		url: url, 
		success: function(res) {
			$paragraph.text(res.value.joke);
		}
	});
}
*/



