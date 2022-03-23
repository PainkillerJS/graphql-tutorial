const { buildSchema } = require("graphql");

// type - типы для геттеров
// input - типы для сеттеров
// type Mutation - для сборки типов для изменения
// type Query - для сборки типов для получения данных

const schema = buildSchema(`
    type User{
      id: ID
      name: String,
      age: Int,
      posts: [Post]
    }
    
    type Post{
      id: ID,
      title: String,
      content: String
    }
    
    input UserInput{
      id: ID
      name: String!,
      age: Int!,
      posts: [PostInput]
    }
    
    input PostInput{
      id: ID,
      title: String!,
      content: String!
    }
    
    type Query{
      getAllUsers: [User]
      getUser(id: ID): User
    }
    
    type Mutation{
      createUser(input: UserInput): User
    }
`);

module.exports = schema;
