function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log(" я прошёл урок ")
}
 learnJS("Javascript", done);