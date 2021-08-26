console.log("Bye bye bye!");

function sayMyName(name = `Eminem`) {
  console.log(`Hello, my name is ${name}`);
}

sayMyName(`Simba`);
sayMyName(undefined);

const user1 = {
  name: "Noemi",
  from: "Hungary",
  greetings: "Yoghurte",
  speaks: ["english", "alien", "hungarian", "some dutch", "german little"],
  isTall: true,
  hobbies: {
    read: {
      frequency: 5,
    },
  },
};

const user2 = {
  name: "Daniel",
  from: "Netherlands",
  greetings: "rrrrrrrrrrrr",
  speaks: [
    "dutch",
    "english",
    "rrrrrr",
    "german little",
    "french little",
    "little bit russian on my side",
  ],
  isTall: true,
};

function printsAllHobbiesAndTheirFrequencies(user) {
  console.log(Object.keys(user));
}

// const { hobbies } = user1;

// printsAllHobbiesAndTheirFrequencies(hobbies);

// const { hobbies: user2Hobbies = {} } = user2;
const { hobbies = {} } = user2;
console.log("hobbies:", hobbies);

// printsAllHobbiesAndTheirFrequencies(user2Hobbies);

function sayTheGreeting({ greetings }) {
  console.log(greetings);
}

sayTheGreeting(user1);

const url = `https://rickandmortyapi.com/api/character`;

fetch(url)
  .then((success) => {
    console.log("success:", success);
  })
  .catch((err) => {});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
