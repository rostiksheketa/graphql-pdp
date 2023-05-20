const { UserList } = require("../fake.data");
const lodash = require("lodash");

const resolvers = { 
  Query: {
    users: () => UserList,
    user: (_, { id }) => lodash.find(UserList, { id: Number(id) }),
  },
  Mutation: {
    createUser: (parent, { userInput }) => {
      userInput.id = UserList[UserList.length - 1].id + 1;
      UserList.push(userInput);

      return userInput ;
    },
  }
};

module.exports = { resolvers };