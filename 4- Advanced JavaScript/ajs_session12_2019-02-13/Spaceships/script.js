
class Starships {
    constructor(name, pilot, fuel, location, type){
        this.name = name;
        this.pilot = pilot;
        this.fuel = fuel;
        this.location = location;
        this.type  = type;
        this.favorite = false;
        
    }

    getFavoriteButtonText(){
        if(this.favorite == false){
            return "No";
        }else{
            return "Yes";
        }
    }

    getId(){
        if(this.id){
            return this.id;
        }else{
            this.id = Math.floor((Math.random() * 10000) + 1);
            return this.id;
        }
    }

    startEngines(){
        return `Engines activated!`;
    }

    takeOff(){
        return `Take off!`;
    }

    land(){
        return `Landed!`;
    }

    addFavorite(){
        this.favorite = true;
    }

    rmvFavorite(){
        this.favorite = false;
    }

    
}

class Fighter extends Starships {
    constructor(name, pilot, fuel, location, type, weapons, shield, kills){
        super(name, pilot, fuel, location, type);
        this.weapons = weapons;
        this.shield = shield;
        this.kills = kills;
    }

    shootWeapon(weapon){
        if(weapon){
            return `Weapon ${weapon} fired!`;
        }else if(this.weapons[0]){
            return `Weapon ${this.weapons[0]} fired!`;
        }else{
            return `Starship has no weapons`;
        }
 
    }

}

class Cargo extends Starships {
    constructor(name, pilot, fuel, location, type, capacity, route, cranes){
        super(name, pilot, fuel, location, type);
        this.capacity = capacity;
        this.route = route;
        this.cranes = cranes;
    }

    load(){
        return `Cargo loaded!`;
    }

    unload(){
        return `Cargo unloaded!`;
    }

}



class Mining extends Starships {
    constructor(name, pilot, fuel, location, type, mining_tools, mining_types, mining_capacity){
        super(name, pilot, fuel, location, type);
        this.mining_tools = mining_tools;
        this.mining_types = mining_types;
        this.mining_capacity = mining_capacity;
    }

    mine(){
        return `Mining`;
    }

    setStorageTemperature(temperatue){
        return `Temperature set on ${temperatue} degrees`;
    }

}

let db_Starships = [];



let generateShips = () => {

    db_Starships[0]= new Fighter("F1","John", 50,"Earth","Fighter",["Rockets","Laser"], 15,2);
    db_Starships[1]= new Fighter("X-wing","Luke", 30,"Hoth","Fighter",["Nuke","Laser"], 20, 60);
    db_Starships[2]= new Fighter("Z-wing","BTL", 40,"Mars","Fighter",["Nuke","EMP","mini gun"], 15, 30);
    db_Starships[3]= new Fighter("Advance-12","YT", 35,"Bespin","Fighter",["mini-gun","big-gun"], 35, 9);
    db_Starships[4]= new Cargo("Transport-1","Worker-1623",90,"Dagobah","Cargo",100,"Bespin-Dagobah",2);
    db_Starships[5]= new Cargo("FastLite","Worker-87912",50,"Endor","Cargo",50,"Bespin-Endor",1);
    db_Starships[6]= new Cargo("Nowait","Worker-651984",30,"Naboor","Cargo",10,"Naboo-Hoth",1);
    db_Starships[7]= new Cargo("Lightspeed-10","Worker-894896",30,"Coruscant","Cargo",9,"Naboo-Coruscant",3);
    db_Starships[8]= new Mining("Miner0900","Worker-0000",30,"Kamino","Mining","RockCrusher","Gold",90);
    db_Starships[9]= new Mining("Miner4355","Worker-8/9745",25,"Kamino","Mining","RockCrusher","Gold",90);
    db_Starships[10]= new Mining("Miner75675","Worker-84651",40,"Kamino","Mining","RockCrusher","Gold",90);
    db_Starships[11]= new Mining("Miner3789","Worker-5428",90,"Kamino","Mining","RockCrusher","Gold",90);

}

generateShips();


let populateSarships = (favorite) => {

    $('#body').html('');
    for (let e of db_Starships){

        if(favorite){
            if(e.favorite == false){
                continue;
            }
        }

            $('#body').append(`
            <tr>
            <td>${e.name}</td>
            <td>${e.pilot}</td>
            <td>${e.fuel}</td>
            <td>${e.location}</td>
            <td>${e.type}</td>
            <td> <button type="button" id='${e.getId()}' class="btn btn-dark">${e.getFavoriteButtonText()}</button> </td>
            </tr>
            `)

        document.getElementById(`${e.getId()}`).addEventListener("click",function(){

        e.favorite ? e.favorite = false : e.favorite = true;
        favoriteMode ? populateSarships(true) : populateSarships();
    
        console.log(`${e.name} ${e.getId()} ${e.favorite}`);
    })

        
       


    }
}



let populateFighters = (favorite) => {

    
    $('#body').html('');
    for (let e of db_Starships){
        if(e.type == "Fighter"){

            if(favorite){
                if(e.favorite == false){
                    continue;
                }
            }


            $('#body').append(`
            <tr>
            <td>${e.name}</td>
            <td>${e.pilot}</td>
            <td>${e.fuel}</td>
            <td>${e.location}</td>
            <td>${e.type}</td>
            <td>${e.weapons}</td>
            <td>${e.shield}</td>
            <td>${e.kills}</td>
            <td> <button type="button" id='${e.getId()}' class="btn btn-dark">${e.getFavoriteButtonText()}</button> </td>
            </tr>
            `)

            document.getElementById(`${e.getId()}`).addEventListener("click",function(){

                e.favorite ? e.favorite = false : e.favorite = true;
                favoriteMode ? populateFighters(true) :populateFighters();
                
                
                console.log(`${e.name} ${e.getId()} ${e.favorite}`);
            })




        }


    }
}

let populateCargos = (favorite) => {

    
    $('#body').html('');
    for (let e of db_Starships){
          if(e.type == "Cargo"){

            if(favorite){
                if(e.favorite == false){
                    continue;
                }
            }

            $('#body').append(`
            <tr>
            <td>${e.name}</td>
            <td>${e.pilot}</td>
            <td>${e.fuel}</td>
            <td>${e.location}</td>
            <td>${e.type}</td>
            <td>${e.capacity}</td>
            <td>${e.route}</td>
            <td>${e.cranes}</td>
            <td> <button type="button" id='${e.getId()}' class="btn btn-dark">${e.getFavoriteButtonText()}</button> </td>
            </tr>
            `)

            document.getElementById(`${e.getId()}`).addEventListener("click",function(){

                e.favorite ? e.favorite = false : e.favorite = true;
                favoriteMode ? populateCargos(true) : populateCargos();
                
                
                console.log(`${e.name} ${e.getId()} ${e.favorite}`);
            })

    }
    }
}

let populateMiners = (favorite) => {

   
    $('#body').html('');
    for (let e of db_Starships){
        if(e.type == "Mining"){

            if(favorite){
                if(e.favorite == false){
                    continue;
                }
            }

            $('#body').append(`
            <tr>
            <td>${e.name}</td>
            <td>${e.pilot}</td>
            <td>${e.fuel}</td>
            <td>${e.location}</td>
            <td>${e.type}</td>
            <td>${e.mining_tools}</td>
            <td>${e.mining_types}</td>
            <td>${e.mining_capacity}</td>
            <td> <button type="button" id='${e.getId()}' class="btn btn-dark">${e.getFavoriteButtonText()}</button> </td>
            </tr>
            `)

            document.getElementById(`${e.getId()}`).addEventListener("click",function(){

                e.favorite ? e.favorite = false : e.favorite = true;
                favoriteMode ? populateMiners(true) : populateMiners();

               
                
                console.log(`${e.name} ${e.getId()} ${e.favorite}`);
            })

        }
    }
}

let favoriteMode,allMode,fighterMode,minerMode,cargoMode;

// TODO FIX THESE IN CSS SO THESE BECOMES NON - REQUIRED IF POSSIBLE
$("#getFavourites").css( "color", "#fffb00");
$("#getStarships").css( "color", "white");

$("#getAll").css( "color", "#fffb00");
$("#getFighter").css( "color", "#fffb00");
$("#getCargo").css( "color", "#fffb00");
$("#getMining").css( "color", "#fffb00");


$(() => {

    $('#getStarships').on('click', () => {
        favoriteMode = false;
        
        $("#getFavourites").css( "color", "#fffb00");
        $("#getStarships").css( "color", "white");

        showStarships();

        allMode ? showStarships() : null;
        fighterMode ? showFigher() : null;
        minerMode ? showMining() : null;
        cargoMode ? showCargo() : null;

        allMode ? populateSarships() : null;
        fighterMode ? populateFighters() : null;
        minerMode ? populateMiners() : null;
        cargoMode ? populateCargos() : null;

        
    })
    $('#getFavourites').on('click', () => {
        favoriteMode = true;
        

        $("#getFavourites").css( "color", "white");
        $("#getStarships").css( "color", "#fffb00");

        allMode ? showStarships() : null;
        fighterMode ? showFigher() : null;
        minerMode ? showMining() : null;
        cargoMode ? showCargo() : null;

        allMode ? populateSarships(true) : null;
        fighterMode ? populateFighters(true) : null;
        minerMode ? populateMiners(true) : null;
        cargoMode ? populateCargos(true) : null;
        
    })
    $('#getAll').on('click', () => {
        showStarships();

        allMode = true;
        fighterMode = false;
        minerMode = false;
        cargoMode = false;

        $("#getAll").css( "color", "white");
        $("#getFighter").css( "color", "#fffb00");
        $("#getCargo").css( "color", "#fffb00");
        $("#getMining").css( "color", "#fffb00");

        favoriteMode ? populateSarships(true) : populateSarships();
        
        
    })
    $('#getFighter').on('click', () => {
        showFigher();

        allMode = false;
        fighterMode = true;
        minerMode = false;
        cargoMode = false;

        $("#getAll").css( "color", "#fffb00");
        $("#getFighter").css( "color", "white");
        $("#getCargo").css( "color", "#fffb00");
        $("#getMining").css( "color", "#fffb00");

        favoriteMode ? populateFighters(true) : populateFighters();

        
    })
    $('#getMining').on('click',() => {
        showMining();

        $("#getAll").css( "color", "#fffb00");
        $("#getFighter").css( "color", "#fffb00");
        $("#getCargo").css( "color", "#fffb00");
        $("#getMining").css( "color", "white");

        allMode = false;
        fighterMode = false;
        minerMode = true;
        cargoMode = false;

        favoriteMode ? populateMiners(true) : populateMiners();

      
        
    })
    $('#getCargo').on('click',() => {
        showCargo();

        allMode = false;
        fighterMode = false;
        minerMode = false;
        cargoMode = true;

        $("#getAll").css( "color", "#fffb00");
        $("#getFighter").css( "color", "#fffb00");
        $("#getCargo").css( "color", "white");
        $("#getMining").css( "color", "#fffb00");

        favoriteMode ? populateCargos(true) : populateCargos();

        
       
    })
    
})

const showHome = () => {
    $('#body').html('');
    $('#table').addClass('display-none');
    $('#starships').addClass('display-none');
    $('#fighter').addClass('display-none');
    $('#mining').addClass('display-none');
    $('#cargo').addClass('display-none');
}

const showStarships = () => {
    $('#body').html('');
    $('#table').removeClass('display-none');
    $('#starships').removeClass('display-none');
    $('#fighter').addClass('display-none');
    $('#mining').addClass('display-none');
    $('#cargo').addClass('display-none');
}

const showFigher = () => {
    $('#body').html('');
    $('#table').removeClass('display-none');
    $('#starships').addClass('display-none');
    $('#fighter').removeClass('display-none');
    $('#mining').addClass('display-none');
    $('#cargo').addClass('display-none');
}

const showMining = () => {
    $('#body').html('');
    $('#table').removeClass('display-none');
    $('#starships').addClass('display-none');
    $('#fighter').addClass('display-none');
    $('#mining').removeClass('display-none');
    $('#cargo').addClass('display-none');
}

const showCargo = () => {
    $('#body').html('');
    $('#table').removeClass('display-none');
    $('#starships').addClass('display-none');
    $('#fighter').addClass('display-none');
    $('#mining').addClass('display-none');
    $('#cargo').removeClass('display-none');
}


