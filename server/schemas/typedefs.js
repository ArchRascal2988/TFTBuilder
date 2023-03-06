const { gql }= require("apollo-server-express");

export const typeDefs= gql`
scalar Map
enum Stars{
    1 Star
    2 Star
    3 Star
}
type abilityT{
    name: String
    desc: String
    cost: [Int]
    variables: Map
    pngUrl: String
}
type traitT{
    minUnits: Int
    variables: Map
}
type cellT{
    row: Int
    column: Int
    currentChamp: ID
}

type Champ{
    _id: ID
    name: String
    cost: Int
    traits: [ID]
    ability: abilityT
    starLvl: Stars
    isPrime: Boolean
    pngUrl: String
}

type Item{
    _id: ID
    name: String
    effects: Map
    from: [Int]
    type: String
    pngUrl: String
}

type Trait{
    _id: ID
    name: String
    desc: String
    type: String
    effects: traitT
    pngUrl: String
}

type Augment{
    _id: ID
    name: String
    desc: String
    effects: Map
    type: String
    pngUrl: String
}

type Board{
    _id: ID
    matrix: [[cellT]]
    augments: [ID]
    traits: Map
    notes: String
}

type User{
    _id: ID
    username: !String
    password: !String
    boards: [ID]
}
`