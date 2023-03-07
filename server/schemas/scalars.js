const { GraphQLScalarType, Kind } = require("graphql");

//using maps a lot for ease of accessing data on front end (effect and ability descs are constructed using this)
const mapScalar = new GraphQLScalarType({
    name: 'Map',
    description: 'Custom map scalar type',
    serialize(value){
        if (value instanceof Map){
            return value;
        } else{
            throw Error("Must be a js Map");
        }
    },
    parseValue(value){
        if (value instanceof Map){
            return value;
        } else{
            throw Error("Must be a js Map");
        }
    },
    parseLiteral(ast){
        if (ast.kind=== Kind.STRING && ast instanceof Array=== false){
            let [key, value]= ast.trim().split(':');
            let map= new Map();
            map.set(key, value);

            return map;
        } else if(ast instanceof Array === false){
            let map= new Map();

            for (const el of ast){
                let [key, value]= ast.trim().split(':');
                map.set(key, value);
            }
            return map;
        } else{
            return null;
        }
    }
});

module.exports= {mapScalar}