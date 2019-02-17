console.log(`It's connected!`);

$(document).ready(function() {
    $("button").click(function() {
        let name = $("input").val();
        $("h1").text(`Hello there ${name}`);
        $("input").val("");
    })
})
