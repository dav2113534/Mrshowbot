// function randomLoop() {
//     for (var i = 0; i < quotes.length; i++) {
//         return Math.floor(Math.random() * i)
//     }
// }

$('#random').hover(function () {
    $('h2').text(randomQuote(quotes.length));
})

function randomQuote(list) {
    var i = Math.floor(Math.random() * list);
    return list[i];
}