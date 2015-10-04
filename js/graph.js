function Dictionary () {
  this.node = null;
  this.wordList = {};
}

Dictionary.prototype.addWord = function (word, after) {
  var node = {};
  word = this.formatWord(word);

  if (typeof this.wordList[word] == "undefined") {
    node = {
      word: word,
      wordsAfter: {},
      totalOccurances: 1
    };
    this.wordList[word] = node;
  } else {
    this.wordList[word].totalOccurances++;
  }

  if (typeof this.wordList[word].wordsAfter[after] == "undefined") {
    this.wordList[word].wordsAfter[after] = {
      word: after,
      count: 1
    };
  } else {
    this.wordList[word].wordsAfter[after].count++;
  }
};

Dictionary.prototype.formatWord = function (word) {
  return word.toLowerCase().replace(/[^A-z0-9]/g);
};
