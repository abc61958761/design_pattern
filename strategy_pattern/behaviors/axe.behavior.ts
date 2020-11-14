import { WeapoonBehavior } from '../weapoon.behavior';

export class AxeBehavior implements WeapoonBehavior{
    public weapoon(): void {
        console.log('axe')
    }
}