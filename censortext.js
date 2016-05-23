var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor(inStr) {
	// body...
	for (idx in censoredWords)
	{
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customCensoredWords)
	{
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	return inStr;
}
function addCensoredWord(word) {
	// body...
	customCensoredWords.push(word);
}
function getCensoredWords(argument) {
	// body...
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
