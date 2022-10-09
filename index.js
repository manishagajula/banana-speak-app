var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! Try again after some time");
}

function errorHandler(error) {
  console.log("error occured", error);
}

function clickHandler() {
  var inputText = txtInput.value; //input

  fetch(getTranslationURL(inputText)) //processing
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
