import { WeapoonBehavior } from './weapoon.behavior';

export abstract class Character {
    private weapoonBehavior: WeapoonBehavior;
    
    constructor(weapoonBehavior: WeapoonBehavior) {
        this.weapoonBehavior = weapoonBehavior;
    }

    public weapoon(): void {
        this.weapoonBehavior.weapoon();
    }

    public setWeapoonBehavior(weapoonBehavior: WeapoonBehavior): void {
        this.weapoonBehavior = weapoonBehavior; 
    }
}