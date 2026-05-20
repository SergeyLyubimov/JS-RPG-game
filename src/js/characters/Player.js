import Arm from '../weapons/Arm.js';
import Knife from '../weapons/Knife.js';

export default class Player {
    constructor(position, name) {
        this.life = 100;
        this.initLife = 100;
        this.magic = 20;
        this.initMagic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm;
        this.position = position;
        this.name = name;
    }

    getLuck() { 
        const randomNumber = Math.random() * 100;
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        const weaponRange = this.weapon.range;

        if (distance > weaponRange) {
            return 0;
        } else {
            return (this.attack + weaponDamage) * this.getLuck() / distance;
        }
    }

    takeDamage(damage) {
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    isDead() {
        if (this.life == 0) {
            return true;
        } else {
            return false;
        }
    }
}