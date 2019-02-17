console.log(`It's connected!`);

// $(document).ready(function() {
//     let firstDiv = $("#first");
//     let anotherFirstDiv = document.getElementById("first");
//     console.log(firstDiv);
//     console.log(anotherFirstDiv);

//     let someTexts = $(".myText");
//     console.log(someTexts);

//     let headers = $("h1");
//     console.log(headers);

//     let firstHeader = $("h1:first");
//     console.log(firstHeader);

//     let group = $(".myText, #second");
//     console.log(group);
// })

$(document).ready(function() {
    let anyDiv = $("wrapperOne");
    console.log(anyDiv);
    let anyParagraph = $("wrapper1P");
    let anotherAnyParagraph = $("p").first();
    let h3 = $("h3").first();
    let h1 = $("h1").first();
    let btn = $("button");
});


$(document).ready(function() {
    $("h1").first().text("JQuery is awesome");
    $("h1").first().after("<p>The added paragraph</p>");
    $("button").css("background-color", "red");
    
})

$(document).ready(function() {
    // let button = $("button");
    $("button").click(function() {
        $("#wrapperTwo").hide();
        $("p").css("color", "green");
        $("button").text("Don't click me!");
    })
})





