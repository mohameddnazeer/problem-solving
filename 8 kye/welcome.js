let words = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
function greet(language) {
    for(let key in words){
        if(key === language){
            return words[key]
        }
    }
    return words["english"];
}

console.log(greet("english")); // "Welcome"
console.log(greet("dutch")); // "Welkom"
console.log(greet("IP Address")); // "welcome"
console.log(greet("french")); // "Bienvenue"

