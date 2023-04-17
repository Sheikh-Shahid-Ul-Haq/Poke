import { gql } from "@apollo/client";

// export const GET_QUERY_POKEMON_DETAILS = gql`
//   query pokemon($id: String, $name: String) {
//     pokemon(id: $id, name: $name) {
//       id
//       name
//       image
//       number
//       types
//       height
//       attacks {
//         fast {
//           name
//           type
//           damage
//         }
//         special {
//           name
//           type
//           damage
//         }
//       }
//     }
//   }
// `;
export const GET_QUERY_POKEMON_DETAILS = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      image
      number
      types
      resistant
      weaknesses
      classification
      evolutions {
        image
        name
        types
        classification
      }
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;
