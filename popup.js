var getTab = function(tab){
    window.alert(tab.url);
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