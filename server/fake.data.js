const UserList = [
    {
      id: 1,
      name: "Yura",
      username: "yuranagibator",
      age: 20,
      nationality: "CANADA",
      friends: [
        {
          id: 2,
          name: "Vlad",
          username: "vladkrasava",
          age: 20,
          nationality: "BRAZIL",
        },
        {
          id: 3,
          name: "Oxana",
          username: "gutsulka_ksenia",
          age: 25,
          nationality: "INDIA",
        },
      ],
    },
    {
      id: 2,
      name: "Vlad",
      username: "vladkrasava",
      age: 20,
      nationality: "BRAZIL",
      friends: [
        {
          id: 1,
          name: "Yura",
          username: "yuranagibator",
          age: 20,
          nationality: "CANADA",
        }
      ]
    },
    {
      id: 3,
      name: "Oxana",
      username: "gutsulka_ksenia",
      age: 25,
      nationality: "INDIA",
      friends: [
        {
          id: 1,
          name: "Yura",
          username: "yuranagibator",
          age: 20,
          nationality: "CANADA",
        }
      ]
    },
  ];
  
  module.exports = { UserList };