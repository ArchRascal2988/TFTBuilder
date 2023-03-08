import { gql } from '@apollo/client';

export const ALL_CHAMPS=gql`
query AllChamps {
    allChamps {
      _id
      ability {
        cost
        desc
        name
        pngUrl
        variables
      }
      cost
      isPrime
      name
      pngUrl
      starLvl
      traits {
        name
      }
    }
  }
  `