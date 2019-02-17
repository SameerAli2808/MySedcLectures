console.log("This script works great!");

let heroName = document.getElementById("who");
let storyPlace = document.getElementById("where");
let storyTime = document.getElementById("when");
let storyTell = document.getElementById("story");
let btnTell = document.getElementById("tell");


btnTell.addEventListener("click", function(){
        storyTell.innerHTML = "";
        storyTell.innerHTML = `There was a hero named <b><i>${heroName.value}</i></b>. 
        He lived in <b><i>${storyPlace.value}</i></b> in the times of <b><i>${storyTime.value}</i></b>.
         It was a great hero indeed.`
})

