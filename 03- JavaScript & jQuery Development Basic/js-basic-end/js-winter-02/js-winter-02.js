console.log(`It's connected!`);

let lastValue = 0;
let previousValue = 0;
let operation = false;
let result = "";
let calValueInput = 0;
let disValueOutput = "";
let lastOperation = "";
let tempResult = "";
let specialOperation = false;

$(document).ready(function() {
    function digits(digit) {
        if(operation == false) {
            calValueInput = $("#main").val();
            $("#main").val(`${calValueInput}${digit}`);
        } else if(operation == true) {
            $("#main").val(`${digit}`);
            operation = false;
        }
    }

    function calculations(operationSign, operationType) {
        calValueInput = $("#main").val();
        disValueOutput = $("#display").val();
        if(specialOperation == true) {
            $("#display").val(`${disValueOutput} ${operationSign} `);
        } else {
            if(disValueOutput == "") {
                $("#display").val(`${calValueInput} ${operationSign} `);
            } else {
                $("#display").val(`${disValueOutput}${calValueInput} ${operationSign} `);
            }
        }
        if(result == "") {
            result = parseFloat($("#main").val());
        } else {
            previousValue = result;
            lastValue = parseFloat($("#main").val());
            if(lastOperation == "") {lastOperation = `${operationType}`};
            if(lastOperation == "sum") {result = previousValue + lastValue};
            if(lastOperation == "sub") {result = previousValue - lastValue};
            if(lastOperation == "mul") {result = previousValue * lastValue};
            if(lastOperation == "div") {
                if($("#main").val() == 0) {
                    result = (`Cannot divide by zero`);
                    lastValue = 0;
                    previousValue = 0;
                    calValueInput = 0;
                    disValueOutput = "";
                    $("#display").val("");
                } else {
                    result = previousValue / lastValue;
                }
            }
        }
        if(result >= Infinity) {
            result = `Very big number`;
        }
        $("#main").val(`${result}`);
        tempResult = result;
        operation = true;
        specialOperation = false;
        lastOperation = `${operationType}`
    }

    function specialCalculations(operationType) {
        let temporary = parseFloat($("#main").val());
        if(operationType === "per") {
            temporary = (tempResult / 100) * temporary;
        };
        if(operationType === "sqr") {
            temporary = Math.sqrt(temporary);
        };
        if(operationType === "x2") {
            temporary = temporary * temporary;
        };
        if(operationType === "x1") {
            temporary = 1 / temporary;
        };
        disValueOutput = $("#display").val();
        $("#display").val(`${disValueOutput}`+`${temporary}`);
        $("#main").val(`${temporary}`);
        specialOperation = true;
    }

    let numVal = ['#num0', '#num1', '#num2', '#num3', '#num4', '#num5', '#num6', '#num7', '#num8', '#num9', '#point'];
    let numDigit = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    for (let i = 0; i < numVal.length; i++) {
        $(`${numVal[i]}`).click(function() {
            digits(`${numDigit[i]}`);
        });
    }

    // $("#num0").click(function() {
    //     digits(0);
    // });
    // $("#num1").click(function() {
    //     digits(1);
    // });
    // $("#num2").click(function() {
    //     digits(2);
    // });
    // $("#num3").click(function() {
    //     digits(3);
    // });
    // $("#num4").click(function() {
    //     digits(4);
    // });
    // $("#num5").click(function() {
    //     digits(5);
    // });
    // $("#num6").click(function() {
    //     digits(6);
    // });
    // $("#num7").click(function() {
    //     digits(7);
    // });
    // $("#num8").click(function() {
    //     digits(8);
    // });
    // $("#num9").click(function() {
    //     digits(9);
    // });
    // $("#point").click(function() {
    //     digits(".");
    // });

    $("#summation").click(function() {
        calculations("+", "sum");
    });
    $("#subtract").click(function() {
        calculations("-", "sub");
    });
    $("#multiply").click(function() {
        calculations("x", "mul");
    });
    $("#divide").click(function() {
        calculations("/", "div");
    });

    $("#percentage").click(function() {
        specialCalculations("per");
    });
    $("#sqr").click(function() {
        specialCalculations("sqr");
    });
    $("#x2").click(function() {
        specialCalculations("x2");
    });
    $("#x1").click(function() {
        specialCalculations("x1");
    });

    $("#plusminus").click(function() {
        calValueInput = parseFloat($("#main").val());
        calValueInput = calValueInput * -1;
        $("#main").val(`${calValueInput}`);
    });

    $("#del").click(function() {
        if(operation == false) {
            let before = $("#main").val().length;
            let after = $("#main").val().substr(-before,before-1);
            $("#main").val(`${after}`);
        }
    });

    $("#ce").click(function() {
        $("#main").val("");
    });

    $("#c").click(function() {
        lastValue = 0;
        previousValue = 0;
        operation = false;
        specialOperation = false;
        result = "";
        calValueInput = 0;
        disValueOutput = "";
        lastOperation = "";
        tempResult = "";
        $("#main").val("");
        $("#display").val("");
    });

    $("#equil").click(function() {
        calValueInput = $("#main").val();
        previousValue = result;
        lastValue = parseFloat($("#main").val());
        if(lastOperation == "sum") {
            result = previousValue + lastValue;
        }
        if(lastOperation == "sub") {
            result = previousValue - lastValue;
        }
        if(lastOperation == "mul") {
            result = previousValue * lastValue;
        }
        if(lastOperation == "div") {
            if($("#main").val() == 0) {
                result = (`Cannot divide by zero`);
                specialOperation = false;
                calValueInput = 0;
                disValueOutput = "";
            } else {
                result = previousValue / lastValue;
            }
        }
        if(result >= Infinity) {
            result = `Very big number`;
        }
        $("#main").val(`${result}`);
        operation = true;
        previousValue = 0;
        lastValue = 0;
        tempResult = result;
        result = "";
        lastOperation = "";
        $("#display").val("");
    });        
});




