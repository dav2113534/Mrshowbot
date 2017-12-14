let gen = $('#random').click(function () {
    $('span').text(randomQuote(quotes.length));
})

function randomQuote(list) {
    var i = Math.floor(Math.random() * list);
    return list[i];
}