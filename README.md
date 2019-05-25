![Books](https://i.ibb.co/pwqRB9v/screencapture-localhost-3000-2019-05-25-19-57-03.png)

# Books

A project for adding and listing books with GraphQL and MongoDB <3

## Setting up the stage

1. `npm install && cd client && npm install`
2. run express server from the root of directory `npm start`
3. Go to client directory and from there run:
4. `npm start`

## Technologies used

- [GraphQL](https://graphql.org/)
- [React Apollo](https://www.apollographql.com/docs/react/)
- [React](https://reactjs.org/) served with [express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [mongoose](https://mongoosejs.com/)
- [Bulma](https://bulma.io/) for styling

## Features

1. List all books that are stored in mongodb

   - click on a book
   - show for each book an author, queried with graphql
   - show all books from that author, queried with graphql

2. Add a new book
   - select authors from a list populated by graphql
