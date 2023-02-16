import { ESMap } from 'typescript';

export type ability={
    name: string,
    desc: string,
    cost: number[],
    abilityUrl: string;
    variables: ESMap<string, number>
}

export type effect={
    minUnits: number;
    variables: ESMap<string, number>
}

export class Item{
    name: string;
    effects: ESMap<string, number>;
    type: string;
    itemURL: string;
    from: number[];

    constructor(name: string, effects: ESMap<string, number>, type: string, url: string, from: number[]){
        this.name= name;
        this.effects= effects;
        this.type= type;
        this.itemURL= url;
        this.from= from;
    }

}

export class Augment{
    name: string;
    desc: string;
    type: string;
    url: string;
    effects: ESMap<string, number>;

    constructor(name: string, desc: string, type: string, url: string, effects: ESMap<string, number>){
        this.name= name;
        this.desc= desc;
        this.type= type;
        this.url= url;
        this.effects= effects;
    }
}

export class Trait{
    name: string;
    desc: string;
    type: string;
    url: string;
    effects: effect;

    constructor(name: string, desc: string, type: string, url: string, effects: effect){
        this.name= name;
        this.desc= desc;
        this.type= type;
        this.url= url;
        this.effects= effects;
    }
}

export class Champ{
    name: string;
    cost: number;
    traits: string[];
    ability: ability;
    aviURL: string;
    currItems: Item[];
    starLvl: String | null;
    isPrime: boolean;

    constructor(name:string, cost:number, traits:string[], ability:ability, url:string, items:Item[] | null){
        this.name= name;
        this.cost= cost;
        this.traits= traits;
        this.aviURL= url;
        this.ability= ability;
        this.currItems=[];
        this.starLvl= null;
        this.isPrime= false;
    }

    equip(item:Item, sw:boolean): any{
        if(sw) this.currItems.push(item);
        else{
            this.currItems.filter((el)=> el.name!==item.name)
        }
    }

    setStatus(input:boolean | string): any{
        typeof input=="string" ? this.starLvl=input : this.isPrime=input;
    }
}

export class Cell{
    row: number;
    column: number;
    champ: Champ | null;

    constructor(row:number, column:number, champ:Champ | null){
        this.row= row;
        this.column= column;
        this.champ= champ || null;
    }

    occupy(champ:Champ, sw:boolean){
        this.champ= sw ? champ : null;
    }
}

export class GameBoard{
    matrix: Cell[][];
    augments: Augment[];
    notes: String;
    traits: ESMap<Trait, number> | null;

    constructor(){
        this.notes= "";
        this.augments= [];
        this.traits= null;
        
        let base= new Array(4).fill(new Array(7).fill({}));
        this.matrix= base.map((el:any, r:number) => el.map((el:any, c:number)=> new Cell(r, c, null)));
    }

    setTrait(t:Trait, amt:number){
        if(!this.traits){
            this.traits= new Map();
        }

        this.traits.set(t, amt)
    }

    displayTrait(){

    }

    setAug(a:Augment){
        this.augments.push(a);
    }

    displayAug(){

    }

    reset(){
        this.notes= "";
        this.augments= [];
        this.traits= null;
        
        let base= new Array(4).fill(new Array(7));
        this.matrix= base.map((el:any, r:number) => el.map((el:any, c:number)=> new Cell(r, c, null)));
    }

    updateNotes(msg:string){
        this.notes=msg;
    }
}