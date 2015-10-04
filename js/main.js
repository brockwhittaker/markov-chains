var dict = new Dictionary();
var sentence = "The quick brown fox jumped over the lazy dog. the lazy the lazy the lazy".split(/ /g);

for (var x = 0; x < sentence.length - 1; x++) {
  dict.addWord(sentence[x], sentence[x + 1]);
}

function readPosts (data) {
  var titles = [];
  data.map(function (i, o) {
    titles[o] = i.data.title;
  });
  return titles;
}

nanoajax.ajax({url: "http://lavancier.com/getData.php", method: 'POST', body: ""}, function (code, responseText, request) {
  data = JSON.parse(responseText).data.children;
  data = readPosts(data);
  console.log(data);
});
