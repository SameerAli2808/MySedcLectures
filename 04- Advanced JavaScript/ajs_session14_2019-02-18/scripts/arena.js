/* *************************************************************
   ********************* The battle logic **********************
   ************************************************************* */

/* ####### Asyncronise function to show arena events ####### */
async function arena(ship01, ship02, round = 5) {
    ship01.health = 100; ship02.health = 100; // Resetting the health values for each battle
    ship01.shield = 50; ship02.shield = 50; // Resetting the shields No. for each battle

    // Clearing the screen before each battle
    $("#arenaHeader").html('');
    $("#arena").html('');

    // Showing the names of the two chosen ships
    $("#arenaHeader").html(`
    ########################################################<br>
    <b>${ship01.name}</b> & <b>${ship02.name}</b> entered the battle arena !!!<br>
    ########################################################<br>
    `);

    // Loop for detmining the damage for each round and calculating the remaining health and shields
    for (let i = 0; i < round; i++) {
        await delay(2000); // Setting a delay of 2 sec.
        $("#arena").html(''); // Clearing the arena details area

        // Detmining the damage for first ship and calculating the remaining health and shields
        let damage02 = ship01.fireWeapon();
        $("#arena").html(`
        <b><i>####### Round No. ${i+1} starts #######</i></b><br>
        <b>${ship01.name}</b> fired it's <i>${ship01.weapon}</i> weapon, and hits ${ship02.name}!<br>
        ${ship02.name} got damage of ${damage02}<br>
        `);
        // Calculating the remaining health and shields for first ship
        if(ship02.shield > 0) {
            ship02.shield -= damage02;
            if(ship02.shield < 0) {
                ship02.health -= damage02 + ship02.shield;
                ship02.shield = 0;
                showResults(ship02.name, ship02.health, ship02.shield);
            } else {
                showResults(ship02.name, ship02.health, ship02.shield);
            }
        } else if(ship02.health > 0) {
            ship02.health -= damage02;
            if(ship02.health < 0) {
                $("#arena").append(`
                ${ship02.name} had been distroyed completly and lost the battel<br>
                `);
                break;
            } else {
                showResults(ship02.name, ship02.health, ship02.shield);
            }
        }

        // Detmining the damage for second ship and calculating the remaining health and shields
        let damage01 = ship02.fireWeapon();
        $("#arena").append(`
        <b>${ship02.name}</b> fired it's <i>${ship02.weapon}</i> weapon, and hits ${ship01.name}!<br>
        ${ship01.name} got damage of ${damage01}<br>
        `);
        // Calculating the remaining health and shields for second ship
        if(ship01.shield > 0) {
            ship01.shield -= damage01;
            if(ship01.shield < 0) {
                ship01.health -= damage01 + ship01.shield;
                ship01.shield = 0;
                showResults(ship01.name, ship01.health, ship01.shield);
            } else {
                showResults(ship01.name, ship01.health, ship01.shield);
            }
        } else if(ship01.health > 0) {
            ship01.health -= damage01;
            if(ship01.health < 0) {
                $("#arena").append(`
                ${ship01.name} had been distroyed completly and lost the battel<br>
                `);
                // console.log(`${ship01.name} had been distroyed completly and lost the battel`);
                break;
            } else {
                showResults(ship01.name, ship01.health, ship01.shield);
            }
        }
    }

    // Calculating the final values and send them to calculate the final result
    ship01Result = ship01.health + ship01.shield;
    ship02Result = ship02.health + ship02.shield;
    statsCalculation(ship01, ship01Result, ship02, ship02Result);
}

/* ####### Show the health and shields values for each round ####### */
function showResults(ship, health, shield) {
    $("#arena").append(`
    ${ship} has ${health} health and ${shield} shields<br>
    `)
}

/* ####### Calculate which ship is wining or if they are draw and show it on screen ####### */
function statsCalculation(ship01, ship01Result, ship02, ship02Result) {
    $("#results").html(''); // Clearing the results area
    
    // Detrmining the win, draw or lose status and declaring it on screen
    if(ship01Result > ship02Result) {
        $("#arena").append(`
        <b>####### ${ship01.name} WON the battle #######</b><br>
        `);
        ship01.stats.wins += 1;
        ship02.stats.loses += 1;
    } else if(ship01Result < ship02Result) {
        $("#arena").append(`
        <b>####### ${ship02.name} WON the battle #######</b><br>
        `);
        ship02.stats.wins += 1;
        ship01.stats.loses += 1;
    } else {
        $("#arena").append(`
        <b>####### ${ship01.name} & ${ship02.name} DRAW #######</b><br>
        `);
        ship01.stats.draws += 1;
        ship02.stats.draws += 1;
    }

    // Total points calculation system
    let vikingPoints = viking.stats.wins * 3 + viking.stats.draws ;
    let babilonPoints = babilon.stats.wins * 3 + babilon.stats.draws ;
    let azeticPoints = azetic.stats.wins * 3 + azetic.stats.draws ;

    // Rearranging the ships up to their total points
    let pointsArr = [vikingPoints, babilonPoints, azeticPoints];
    let finalArr = [];
    pointsArr.sort(); // Sorting the values from min to max

    // Loop to set the values of total points to thier ships
    for (const ele of pointsArr) {
        if (ele === vikingPoints) {
            finalArr.push(viking);            
        }
         if(ele === babilonPoints) {
            finalArr.push(babilon);
        }
         if(ele === azeticPoints) {
            finalArr.push(azetic);
        }
    }
    finalArr.reverse(); // Reversing the array to be from max to min

    // Illustrating the total result on screen
    $("#results").html(`
    #############   The Total Result   #############<br>
    `)
    for(i = 0; i < 3; i++) {
        $("#results").append(`
        <b>${finalArr[i].name}</b> has <b>${finalArr[i].stats.wins}</b> wins, <b>${finalArr[i].stats.draws}</b> draws, <b>${finalArr[i].stats.loses}</b> loses<br>
        `)
    }
}

/* ####### Delay function ####### */
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random() > 0
            return rand ? resolve() : reject('Something went wrong')
        }, ms)
    })
}

/* ####### Event listener to check which ship had been chosen and No. of rounds,
   and checking if the user choose the right No. of ships and the acceptable No. of rounds 
   then calling the asyc function with the right values ####### */
$(() => {
    $('#start').on('click', () => {
        let ships01 = $("#ship01:checked").val();
        let ships02 = $("#ship02:checked").val();
        let ships03 = $("#ship03:checked").val();
        let rounds = $("#rounds").val();

        if(rounds < 1) {
            alert(`Specify positive number of rounds, please!`)
        } else if(ships01 !== undefined && ships02 !== undefined && ships03 === undefined) {
            arena(viking, babilon, rounds)
        } else if(ships01 !== undefined && ships03 !== undefined && ships02 === undefined) {
            arena(viking, azetic, rounds)
        } else if(ships02 !== undefined && ships03 !== undefined && ships01 === undefined) {
            arena(babilon, azetic, rounds)
        } else {
            alert(`Choose two ships, please!`)
        }
    })
})
