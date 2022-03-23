import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getAllUsers {
      id
      name
      age
    }
  }
`;
