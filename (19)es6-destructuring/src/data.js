//Some Examples of Destructuring
const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];

const [cat, dog] = animals;
//variable name must be same as the object's names
const { name, sound } = cat;
//Allows renaming
const { name: animalType, sound: speak } = cat;
//Allows default vaule if no variable in object
const { name = "Fluffy", sound = "roof" } = dog;

//Nested Objects
const DOG = {
  name: "dog",
  sound: "woof",
  feedingRequirements: {
    food: 2,
    water: 3
  }
};

const {
  name,
  sound,
  feedingRequirements: { food, water }
} = DOG;
