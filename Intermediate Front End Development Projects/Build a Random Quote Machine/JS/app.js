

function getRandom() {
    var urlCheck = 'https://api.forismatic.com/api/1.0/?';
    $.ajax({
        url: urlCheck,
        dataType: 'jsonp',
        jsonp: 'jsonp',
        data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en'
        },
        success: function(response) {
            //console.log(response.quoteText);
            $('.card-text').html(response.quoteText);
            $('.card-title').text(response.quoteAuthor);
            $("#tweetThis").attr("href", "https://twitter.com/intent/tweet?text="+response.quoteText+"--"+response.quoteAuthor+" ");
        }
    })  
}


$(function() {
    getRandom();
  });
  

$("#getNew").on("click", function() {
    getRandom();
});
