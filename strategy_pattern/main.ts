import { Queen } from "./characters/queen";
import { KnifeBehavior } from './behaviors/knife.behavior';

const queen = new Queen();

// 初始武器
queen.weapoon();

// 換把刀吧
queen.setWeapoonBehavior(new KnifeBehavior);

queen.weapoon();