var dict = new Dictionary();
var sentence = "The quick brown fox jumped over the lazy dog. the lazy the lazy the lazy".split(/ /g);

for (var x = 0; x < sentence.length - 1; x++) {
  dict.addWord(sentence[x], sentence[x + 1]);
}


nanoajax.ajax({url: "php/getData.php", method: 'POST', body: "http://www.reddit.com.json"}, function (code, responseText, request) {
  data = responseText;
  console.log(data);
});
