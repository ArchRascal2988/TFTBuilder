const { gql }= require("apollo-server-express");

const typeDefs= gql`
scalar Map
enum NumStars {
    ONE
    TWO
    THREE
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
    _id: ID!
    name: String
    cost: Int
    traits: [ID]
    ability: abilityT
    starLvl: NumStars
    isPrime: Boolean
    pngUrl: String
}

type Item{
    _id: ID!
    name: String
    effects: Map
    from: [Int]
    type: String
    pngUrl: String
}

type Trait{
    _id: ID!
    name: String
    desc: String
    type: String
    effects: traitT
    pngUrl: String
}

type Augment{
    _id: ID!
    name: String
    desc: String
    effects: Map
    type: String
    pngUrl: String
}

type Board{
    _id: ID!
    matrix: [[cellT]]
    augments: [ID]
    traits: Map
    notes: String
}

type User{
    _id: ID!
    username: String!
    password: String!
    boards: [ID]
}

type Query{
    allChamps: [Champ]
}

type Mutation{
    signup(usern: String!, pass: String!): User
}
`;
module.exports= typeDefs