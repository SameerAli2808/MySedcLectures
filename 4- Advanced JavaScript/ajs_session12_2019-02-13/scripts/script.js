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
let xWing = new Fighter(fighter01);

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

let cargo01 = {
    name: 'Thita',
    pilot: 'Leia Organa',
    fuleTankCapacity: 170,
    currentLocation: 'Bespin',
    typeOfStarship: 'Transporter',
    tradingRoutManifest: 'Bespin - Endor',
    loadingCranes: 5,
}
let thita = new CargoShip(cargo01);

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
let banking = new MiningShip(mining01);

$(() => {
    $('#goHome').on('click', showLogo)
    $('#getFighter').on('click', () => {
        // showPeople()
        populateFighter()
    })
    $('#getCargo').on('click', () => {
        // showPlanets()
        populateCargo()
    })
    $('#getMining').on('click', () => {
        populateMining()
    })
    $('#choose').change( () => {
        let ships = $('#choose').val()
        if(ships === 'fighter') {
            populateFighter()
        }
    })
})

let populateFighter = () => {
    $('#fighter').removeClass('display-none');
    $('#cargo').addClass('display-none')
    $('#mining').addClass('display-none')
    $('#showDataFighter').html('')
    $('#showDataFighter').append(`
        <h1>${fighter01.name}</h1>
        <h3>Pilot: ${fighter01.pilot}</h3>
        <p>Fule Tank Capacity: ${fighter01.fuleTankCapacity}<br>
        Current Location: ${fighter01.currentLocation}<br>
        Type: ${fighter01.typeOfStarship}<br>
        Weapons: ${fighter01.weapons}<br>
        Shield: ${fighter01.shield}<br>
        No. of Kills: ${fighter01.NumberOfKills}</p>
    `)
}
// populateFighter();

let populateCargo = () => {
    $('#cargo').removeClass('display-none');
    $('#fighter').addClass('display-none')
    $('#mining').addClass('display-none')
    $('#showDataCargo').html('')
    $('#showDataCargo').append(`
        <h1>${cargo01.name}</h1>
        <h3>Pilot: ${cargo01.pilot}</h3>
        <p>Fule Tank Capacity: ${cargo01.fuleTankCapacity}<br>
        Current Location: ${cargo01.currentLocation}<br>
        Type: ${cargo01.typeOfStarship}<br>
        Trading Rout: ${cargo01.tradingRoutManifest}<br>
        Loading Cranes: ${cargo01.loadingCranes}</p>
    `)
}
// populateCargo();

let populateMining = () => {
    $('#mining').removeClass('display-none');
    $('#fighter').addClass('display-none')
    $('#cargo').addClass('display-none')
    $('#showDataMining').html('')
    $('#showDataMining').append(`
        <h1>${mining01.name}</h1>
        <h3>Pilot: ${mining01.pilot}</h3>
        <p>Fule Tank Capacity: ${mining01.fuleTankCapacity}<br>
        Current Location: ${mining01.currentLocation}<br>
        Type: ${mining01.typeOfStarship}<br>
        Mining Tools: ${mining01.miningTools}<br>
        Mining Types: ${mining01.miningTypes}<br>
        Mining Storage Capacity: ${mining01.miningStorageCapacity}</p>
    `)
}
// populateMining();

const showLogo = () => {
    // $('#mainShow').html('');
    // $('#mainShow').addClass('display-none')
    $('#creat').removeClass('display-none')
    $('#fighter').addClass('display-none')
    $('#cargo').addClass('display-none')
    $('#mining').addClass('display-none')
    // $('.logo').removeClass('display-none')
    // $('#table').addClass('display-none')
    // $('#showTable').addClass('display-none')
}

// console.log(ships);
