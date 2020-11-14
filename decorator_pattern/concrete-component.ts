import { Role } from './component';

class ConcreteComponent implements Role {
    public trick(): void {
        console.log('test');
    }
}