const fs= require('fs');
const { Schema }= require('mongoose');
const {Champ, Trait, Item, Augment}= require('../models/index');


const ctA= JSON.parse(fs.readFileSync('./champ_traitRaw.json', 'utf-8'));
const iaA= JSON.parse(fs.readFileSync('./item_augRaw.json', 'utf-8'));
const champA= ctA.champions;
const traitA= ctA.traits;
console.log(iaA);

const clean= async (arr, model, limiterL, limiterH)=>{
    const cleanArr= await arr.map(async (el)=>{
        let newObj= {};
        for(const key in model){
        //check if current key exisits in raw data
            if(!el[key]){
                continue;
            } 
        //check if models field is a subdoc, and recurse with single raw key value and subdoc schema (extracting back to obj upon resoluiton)
            else if(model[key] instanceof Schema){
                newObj[key]= await clean([el[key]], model[key].obj).then((arr)=> arr[0]);
            }
        //check if models field is an array of subdocs, and recurse with raw array and subdoc model
            else if(model[key] instanceof Array && model[key][0] instanceof Schema){
                newObj[key]= await clean(el[key], model[key][0].obj).then(arr=> Promise.all(arr));
            } 
        //check if models field is a regular array
            else if(model[key] instanceof Array && !model[key] instanceof Schema){
                //for primitive types
                if(model[key][0]() == typeof el[0]){
                    newObj[key]= el[key];
                } 
                //for foriegn key (under construction)
                else{
                    // newObj[key]= model[key][0].ref;
                }
            }  
        //map edge case
            else if(key=="variables"){
                if(new model[key]() instanceof Map){
                    newObj[key]= new Map();
                    for(const key2 in el[key]){
                        newObj[key].set(key2, el[key][key2])
                    }   
                }
            }
        //default
            else{
                newObj[key]= el[key]
            }      
        }
        return newObj;
    });

    return cleanArr;
}

const seed= (arr, model)=>{

}

(async ()=>{
    //adding model serialization to stack and then resolving promises before passing to seeder function
    await clean(traitA, Trait.schema.obj).then(async (arr)=>{
        const newarr= await Promise.all(arr);
        seed(newarr, Champ);
    });

    await clean(champA, Champ.schema.obj).then(async (arr)=>{
        const newarr= await Promise.all(arr);
        seed(newarr, Champ);
    });
})();


