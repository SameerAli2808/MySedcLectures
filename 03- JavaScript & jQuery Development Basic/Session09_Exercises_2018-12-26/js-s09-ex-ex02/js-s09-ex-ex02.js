console.log(`It's connected!`);

let numDigitis, isEven, isPosetive;

$(document).ready(function() {
    function getNum(number) {
        numDigitis = Math.abs(number).toString().length;
        console.log(numDigitis);

        if(number % 2 === 0) {
            isEven = true;
        } else { isEven = false; 
        };

        if(number >= 0) {
            isPosetive = true;
        } else { isPosetive = false; 
        };

        let numObject = {
            digit: numDigitis,
            even: function() {
                if(isEven === true) {
                    return "Even";
                } else {
                    return "Odd";
                }
            },
            posetive: function() {
                if(isPosetive === true) {
                    return "Posetive";
                } else {
                    return "Negetive";
                }
            }
        }
        $("h3").text(`The number ${number} is a ${numObject.digit} digits number, it's ${numObject.even()} and it's ${numObject.posetive()} number `);
    };

    $("button").click(function() {
        let checkNum = $("input").val();
        getNum(checkNum);

    })
});

