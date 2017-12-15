function doGet() {  
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

/**
 * Insert HTML content to a file
 * @param  {String} filename [Name of the Google Script file]
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function getMetrics(){
	var parsedJson = JSON.parse(JsonString)
	return parsedJson
}

