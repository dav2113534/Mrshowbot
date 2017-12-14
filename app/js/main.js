$('#random').hover(function () {
    $('h2').text(randomQuote(quotes.length));
})

function randomQuote(list) {
    var i = Math.floor(Math.random() * list);
    return list[i];
}