
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





