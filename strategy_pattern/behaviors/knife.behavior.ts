import { WeapoonBehavior } from '../weapoon.behavior';

export class KnifeBehavior implements WeapoonBehavior {
    public weapoon():void {
        console.log("Knife");
    }
}