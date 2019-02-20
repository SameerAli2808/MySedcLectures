/* *************************************************************
   ******* Declaring the ships and showing them on screen ******
   ************************************************************* */
/* ####### Declaring the (ship) class ####### */
class ship {
    constructor({name, crew, weapon, health, shield, stats}) {
        this.name = name;
        this.crew = crew;
        this.weapon = weapon;
        this.health = health;
        this.shield = shield;
        this.stats = stats;
    }
    fireWeapon() { // Meathode to determine the (damage) value between 10 to 20
        let damage = Math.floor((Math.random() * 10) + 10);
        return damage;
    }
}

/* ####### Hardcoding the ships' properties ####### */
let ship01 = {
    name: 'Viking',
    crew: 10,
    weapon: 'Laser',
    health: 100,
    shield: 50,
    stats: {wins: 0, loses: 0, draws: 0},
}

let ship02 = {
    name: 'Babilon',
    crew: 20,
    weapon: 'Ion',
    health: 100,
    shield: 50,
    stats: {wins: 0, loses: 0, draws: 0},
}

let ship03 = {
    name: 'Azetic',
    crew: 15,
    weapon: 'Plasma',
    health: 100,
    shield: 50,
    stats: {wins: 0, loses: 0, draws: 0},
}

/* ####### Declaring the ships as (ship) class variables, 
   put them in an array and illustrating them on screen ####### */
let viking = new ship(ship01);
let babilon = new ship(ship02);
let azetic = new ship(ship03);

let shipsArr = [viking, babilon, azetic]

for (const ship of shipsArr) {
    $('#showShips').append(`
    <div class="col">
        <h3>${ship.name}</h3><br>
        <p>Crew No.: ${ship.crew}</br>
        Weapon: ${ship.weapon}</br>
        Health Point: ${ship.health}</br>
        Shields No.: ${ship.shield}</p>
    </div>`)
}






