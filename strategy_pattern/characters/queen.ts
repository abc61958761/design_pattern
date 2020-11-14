import { AxeBehavior } from '../behaviors/axe.behavior';
import { Character } from '../character';
export class Queen extends Character {

    constructor() {
        super(new AxeBehavior());
    }
}