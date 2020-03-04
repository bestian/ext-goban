var getTab = function(tab){
	var id = document.getElementById('gobanID').value;
	var lev = document.getElementById('gobanLev').value;
    var url = 'https://ethercalc.org/_/' + id + lev
    var data = encodeURIComponent(tab.url)+','+ encodeURIComponent(tab.title)
   $.ajax({
    url: url,
    type: 'POST',
    contentType: 'text/csv',
    processData: false,
    data: data
  });
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