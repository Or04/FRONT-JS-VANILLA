{
    let wordToS = ""
    let text = ""
    $('#search').keyup(highlight);

    function highlight() {
        wordToS = $("#search").val()
        let regex = new RegExp(wordToS, 'g');
        text = $("#text").text()
        let newText = text.replace(regex, '<mark>' + wordToS + '</mark>');
        document.getElementById('text').innerHTML = newText;
    }

}
