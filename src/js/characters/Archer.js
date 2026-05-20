import Player from './Player.js';
import Bow from '../weapons/Bow.js';

export default class Archer extends Player {
    constructor(position, name) {
        super(position, name);

        this.life = 80;
        this.initLife = 80;
        this.magic = 35;
        this.initMagic = 35;
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.weapon = new Bow;        
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        const weaponRange = this.weapon.range;

        if (distance > weaponRange) {
            return 0;
        } else {
            return (this.attack + weaponDamage) * this.getLuck() * distance / weaponRange;
        }       
    }
}