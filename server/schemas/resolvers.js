const { mapScalar} = require("./scalars.js");
const {Champ}= require("../models");

//custom scalars at top, controllers after
module.exports={
    Map: mapScalar,
    NumStars:{
        ONE: '1 Star',
        TWO: '2 Star',
        THREE: '3 Star'
    },

    Query:{
        allChamps: async ()=>{
            return await Champ.find({});
        }
    },
    Mutation:{
        signup: async ()=>{

        }
    }
}