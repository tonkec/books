import { gql } from "apollo-boost";
export const getBooksQuery = gql`
  query {
    books {
      name
      genre
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        books {
          name
          id
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
