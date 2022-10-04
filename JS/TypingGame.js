
window.onload = function() {

    var words = [];
    fetch('../Games/words.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            
            for(var key in json) {
                var item = json[key];
                words.push({
                    word: item.word
                });
            }
            console.log(words);
        });
}

