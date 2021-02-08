var getGobans = function(){
  console.log( 'GET' );
  $.get( "https://goban-hub.firebaseio.com/gobans.json", function( data ) {
    console.log( data );
    var keys = Object.keys(data)
    console.log(keys)
    keys.forEach(function(k){
      $('#gobans').append(new Option(k, k));
      $('#links').append('<li><a class="url" href="http://goban.tw/#/see/'+ k +'/0/new" target="_blank">'+ k +'</a></li>')
    })
  });
}

setTimeout(getGobans, 200)

var getTab = function(tab){
	var id = document.getElementById('gobanID').value;
	var lev = document.getElementById('gobanLev').value;
  if (lev === -1 ) {
    lev = ''
  }
    var url = 'https://ethercalc.net/_/' + id + lev
    var data = tab.url+','+ encodeURIComponent(tab.title)
   $.ajax({
    url: url,
    type: 'POST',
    contentType: 'text/csv',
    processData: false,
    data: data
  });
  window.alert('URL upload')
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