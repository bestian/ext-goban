var postAjax = function(url, data, success) {   
	window.alert(url)
	$.ajax({
	    url: url,
	    type: 'POST',
	    contentType: 'text/csv',
	    processData: false,
	    data: data
	}).done(function() {
    alert( "success" );
	})
	.fail(function() {
	  alert( "error" );
	})
	.always(function() {
	  alert( "complete" );
	});
}

var getTab = function(tab){
	var id = document.getElementById('gobanID').value;
	var lev = document.getElementById('gobanLev').value;
    postAjax('https://www.ethercalc.org/_/' + id + lev, tab.url+','+ tab.title, function(data){ window.alert(data); });
};


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		    getTab(tabs[0]);
		});
    });
});