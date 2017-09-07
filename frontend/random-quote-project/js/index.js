$(".quote_next").on("click", function() {
		getQuotes()
});

function getQuotes() {
	$.getJSON("https://talaikis.com/api/quotes/random/", function(response) {
		$('#thequote').html("<p>"+ response.quote +"</p>");
		$('#author').html(""+response.author);
	});
	
	$("#tweetthis").attr("href", "https://twitter.com/home/?status=" + response.quote +
          ' (' + response.author + ')');
}

$(function() {
	getQuotes();
});