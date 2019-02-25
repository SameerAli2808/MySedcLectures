class Sship {
    constructor({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship}) {
        this.name = name;
        this.pilot = pilot;
        this.fuleTankCapacity = fuleTankCapacity;
        this.currentLocation = currentLocation;
        this.typeOfStarship = typeOfStarship;
    }
    startEngins() {
        return `Enginins started!`;
    }
    takeOff() {
        return `We are taking off!`;
    }
    land() {
        return `Preparing to land!`;
    }
}

class Fighter extends Sship {
    constructor({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship, weapons, shield, NumberOfKills}) {
    super({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship});
    this.weapons = weapons;
    this.shield = shield;
    this.NumberOfKills = NumberOfKills;
    }
    shootWeapon01() {
        return `Weapon No. 1 have been shooted`;
    }
    shootWeapon02() {
        return `Weapon No. 2 have been shooted`;
    }
    shootWeapon03() {
        return `Weapon No. 3 have been shooted`;
    }
}

class CargoShip extends Sship {
    constructor({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship, cargoCapacity, tradingRoutManifest, loadingCranes}) {
    super({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship});
    this.cargoCapacity = cargoCapacity;
    this.tradingRoutManifest = tradingRoutManifest;
    this.loadingCranes = loadingCranes;
    }
    load() {
        return `Shipment being loaded.`;
    }
    unload() {
        return `Shipment being unloaded.`;
    }
}

class MiningShip extends Sship {
    constructor({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship, miningTools, miningTypes, miningStorageCapacity}) {
    super({name, pilot, fuleTankCapacity, currentLocation, typeOfStarship});
    this.miningTools = miningTools;
    this.miningTypes = miningTypes;
    this.miningStorageCapacity = miningStorageCapacity;
    }
    mineHarvest() {
        return `We are mining, sir!`;
    }
    setStorageTemperature(degree) {
        return `Storage temperature set to ${degree}`;
    }
}

let fighterShips = [];
let cargoShips = [];
let miningShips = [];

let fighter01 = {
    name: 'X-wing',
    pilot: 'Luke Skywalker',
    fuleTankCapacity: 100,
    currentLocation: 'Dagobah',
    typeOfStarship: 'Light fighter',
    weapons: ['Auto Gun', 'Missaile', 'Bombs'],
    shield: 'Iron',
    NumberOfKills: 445234,
}
fighterShips.push(new Fighter(fighter01));

let cargo01 = {
    name: 'Thita',
    pilot: 'Leia Organa',
    fuleTankCapacity: 170,
    currentLocation: 'Bespin',
    typeOfStarship: 'Transporter',
    tradingRoutManifest: 'Bespin - Endor',
    loadingCranes: 5,
}
cargoShips.push(new CargoShip(cargo01));


let mining01 = {
    name: 'Banking clan frigate',
    pilot: 'Owen Lars',
    fuleTankCapacity: 120,
    currentLocation: 'Mustafar',
    typeOfStarship: 'Cruiser',
    miningTools: ['Driller', 'Digger'],
    miningTypes: ['Drilling', 'Digging'],
    miningStorageCapacity: 40000,
}
miningShips.push(new MiningShip(mining01));

$(() => {
    $('#goHome').on('click', showLogo)
    $('#gfighter').on('click', () => {
        // showPeople()
        populateFighter()
    })
    $('#gcargo').on('click', () => {
        // showPlanets()
        populateCargo()
    })
    $('#gmining').on('click', () => {
        populateMining()
    })
    $('#choose').change( () => {
        $('#submit').off('click')
        let ships = $('#choose').val()
        if(ships === 'fighter') {
            $('#creatFighter').removeClass('display-none')
            $('#creatCargo').addClass('display-none')
            $('#creatMining').addClass('display-none')
            creatNewShip('fighter');
        }
        if(ships === 'cargo') {
            $('#creatCargo').removeClass('display-none')
            $('#creatFighter').addClass('display-none')
            $('#creatMining').addClass('display-none')
            creatNewShip('cargo');
        }
        if(ships === 'mining') {
            $('#creatMining').removeClass('display-none')
            $('#creatFighter').addClass('display-none')
            $('#creatCargo').addClass('display-none')
            creatNewShip(`mining`);
        }
    })
    // $('#chooseShip').on('click', () => {
    //     // $('#submit').off('click')
    //     let choosenShip = $('#chooseShip').val()
    //     console.log(choosenShip);
    //     // if(ships === 'fighter') {
    //     //     $('#creatFighter').removeClass('display-none')
    //     //     $('#creatCargo').addClass('display-none')
    //     //     $('#creatMining').addClass('display-none')
    //     //     creatNewShip('fighter');
    //     // }
    //     // if(ships === 'cargo') {
    //     //     $('#creatCargo').removeClass('display-none')
    //     //     $('#creatFighter').addClass('display-none')
    //     //     $('#creatMining').addClass('display-none')
    //     //     creatNewShip('cargo');
    //     // }
    //     // if(ships === 'mining') {
    //     //     $('#creatMining').removeClass('display-none')
    //     //     $('#creatFighter').addClass('display-none')
    //     //     $('#creatCargo').addClass('display-none')
    //     //     creatNewShip(ships);
    //     // }
    // })
})

let creatNewShip = (ship) => {
    $('#submit').on('click', (event) => {
        event.preventDefault()

        let fighter = {
            name: $('#nameFighter').val(),
            pilot: $('#pilotFighter').val(),
            fuleTankCapacity: $('#fuleTankCapacityFighter').val(),
            currentLocation: $('#currentLocationFighter').val(),
            typeOfStarship: 'Fighter',
            weapons: $('#weapons').val(),
            shield: $('#shield').val(),
            NumberOfKills: $('#numberOfKills').val(),
        }
        let cargo = {
            name: $('#nameCargo').val(),
            pilot: $('#pilotCargo').val(),
            fuleTankCapacity: $('#fuleTankCapacityCargo').val(),
            currentLocation: $('#currentLocationCargo').val(),
            typeOfStarship: 'Cargo',
            cargoCapacity: $('#cargoCapacity').val(),
            tradingRoutManifest: $('#tradingRoutManifest').val(),
            loadingCranes: $('#loadingCranes').val(),
        }
        let mining = {
            name: $('#nameMining').val(),
            pilot: $('#pilotMining').val(),
            fuleTankCapacity: $('#fuleTankCapacityMining').val(),
            currentLocation: $('#currentLocationMining').val(),
            typeOfStarship: 'Mining',
            miningTools: $('#miningTools').val(),
            miningTypes: $('#miningTypes').val(),
            miningStorageCapacity: $('#miningStorageCapacity').val(),
        }
        switch (ship) {
            case 'fighter':
                fighterShips.push(new Fighter(fighter));
                break;
            case 'cargo':
                cargoShips.push(new CargoShip(cargo));
                break;
            case 'mining':
                miningShips.push(new MiningShip(mining));
                break;
            default:
                alert(`No such kind of ships, sorry!`)
                break;
        }
        console.log(ship)
    })
}


let populateFighter = () => {
    $('#fighter').removeClass('display-none');
    $('#cargo').addClass('display-none')
    $('#mining').addClass('display-none')
    $('#creat').addClass('display-none')
    $('#showDataFighter').html('')
    for(i = 0; i < fighterShips.length; i++) {
        $('#showDataFighter').append(`
        <h1>${fighterShips[i].name}</h1>
        <h3>Pilot: ${fighterShips[i].pilot}</h3>
        <p>Fule Tank Capacity: ${fighterShips[i].fuleTankCapacity}<br>
        Current Location: ${fighterShips[i].currentLocation}<br>
        Type: ${fighterShips[i].typeOfStarship}<br>
        Weapons: ${fighterShips[i].weapons}<br>
        Shield: ${fighterShips[i].shield}<br>
        No. of Kills: ${fighterShips[i].NumberOfKills}</p>
        <p></p>
    `)
    }
    
}
// populateFighter();

let populateCargo = () => {
    $('#cargo').removeClass('display-none');
    $('#fighter').addClass('display-none')
    $('#mining').addClass('display-none')
    $('#creat').addClass('display-none')
    $('#showDataCargo').html('')
    for(i = 0; i < cargoShips.length; i++) {
    $('#showDataCargo').append(`
        <h1>${cargoShips[i].name}</h1>
        <h3>Pilot: ${cargoShips[i].pilot}</h3>
        <p>Fule Tank Capacity: ${cargoShips[i].fuleTankCapacity}<br>
        Current Location: ${cargoShips[i].currentLocation}<br>
        Type: ${cargoShips[i].typeOfStarship}<br>
        Trading Rout: ${cargoShips[i].tradingRoutManifest}<br>
        Loading Cranes: ${cargoShips[i].loadingCranes}</p>
    `)
    }
}
// populateCargo();

let populateMining = () => {
    $('#mining').removeClass('display-none');
    $('#fighter').addClass('display-none')
    $('#cargo').addClass('display-none')
    $('#creat').addClass('display-none')
    $('#showDataMining').html('')
    for(i = 0; i < miningShips.length; i++) {
    $('#showDataMining').append(`
        <h1>${miningShips[i].name}</h1>
        <h3>Pilot: ${miningShips[i].pilot}</h3>
        <p>Fule Tank Capacity: ${miningShips[i].fuleTankCapacity}<br>
        Current Location: ${miningShips[i].currentLocation}<br>
        Type: ${miningShips[i].typeOfStarship}<br>
        Mining Tools: ${miningShips[i].miningTools}<br>
        Mining Types: ${miningShips[i].miningTypes}<br>
        Mining Storage Capacity: ${miningShips[i].miningStorageCapacity}</p>
    `)
    }
}
// populateMining();

const showLogo = () => {
    // $('#mainShow').html('');
    // $('#mainShow').addClass('display-none')
    $('#creat').removeClass('display-none')
    $('#fighter').addClass('display-none')
    $('#cargo').addClass('display-none')
    $('#mining').addClass('display-none')
    $('#creatMining').addClass('display-none')
    $('#creatFighter').addClass('display-none')
    $('#creatCargo').addClass('display-none')
    // $('.logo').removeClass('display-none')
    // $('#table').addClass('display-none')
    // $('#showTable').addClass('display-none')
}

// console.log(ships);
