import { ESMap } from 'typescript';

/*
Idea with this approach is that 
with the defined classes we can directly feed the clas methods
into resolvers in action arg

I know this is an anti pattern using redux but this is what made sense to my brain considiering how complex the data is

Types are for typing :3
*/ 


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
    traits: Trait[];
    ability: ability;
    aviURL: string;
    currItems: Item[];
    starLvl: String | null;
    isPrime: boolean;

    constructor(name:string, cost:number, traits:Trait[], ability:ability, url:string, items:Item[] | null){
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
    heldI: Item | null;

    constructor(row:number, column:number, champ?:Champ, heldI?:Item){
        this.row= row;
        this.column= column;
        this.champ= champ || null;
        this.heldI= heldI || null;
    }

    occupy(champ?:Champ){
        this.champ= champ ? champ : null;
        return champ==null? champ : 'none';
    }
}

export class GameBoard{
    matrix: Cell[][];
    augments: Augment[];
    notes: String;
    title: String;
    traits: ESMap<Trait, number>;

    constructor(matrix?:Cell[][], augments?:Augment[], notes?:String, title?:String, traits?:ESMap<Trait, number>){
        this.augments= augments || [];
        this.notes= notes || "";
        this.traits= traits || new Map();
        this.title= title || "";
        
        if(!matrix){
            let base= new Array(4).fill(new Array(7).fill({}));
            this.matrix= base.map((el:any, r:number) => el.map((el:any, c:number)=> new Cell(r, c)));
        } else{
            this.matrix= matrix;
        }
        
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
        this.traits= new Map();
        
        let base= new Array(4).fill(new Array(7));
        this.matrix= base.map((el:any, r:number) => el.map((el:any, c:number)=> new Cell(r, c)));
    }

    updateNotes(msg:string){
        this.notes=msg;
    }
}