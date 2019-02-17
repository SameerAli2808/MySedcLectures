console.log(`It's connected`);

/* Animal Speak */

let message = document.getElementById("animalSpeak");
let name = document.getElementById("name");
let kind = document.getElementById("kind");
let speak = document.getElementById("speak");
let btnSpeak = document.getElementById("submit");

btnSpeak.addEventListener("click", function() {
    let animal = {
        animalName: name.value,
        animalKind: kind.value,
        animalSpeak: function(whatToSpeak) {
            return message.textContent = `${this.animalName} the ${this.animalKind} says ${whatToSpeak}`;
        }
    }
    animal.animalSpeak(speak.value);
    name.value = "";
    kind.value = "";
    speak.value = "";
})






