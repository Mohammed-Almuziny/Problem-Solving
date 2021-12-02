function findSenior(list) {
  return list.reduce((acc, item) => {
    if (!acc[0]) acc.push(item);
    else if (acc[0].age < item.age) acc = [item];
    else if (acc[0].age === item.age) acc.push(item);

    return acc;
  }, []);
}

const list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

const list2 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
];

const list3 = [
  {
    firstName: "Alexander",
    lastName: "F.",
    country: "Russia",
    continent: "Europe",
    age: 89,
    language: "Java",
  },
  {
    firstName: "Fatima",
    lastName: "K.",
    country: "Saudi Arabia",
    continent: "Asia",
    age: 21,
    language: "Clojure",
  },
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Nikola",
    lastName: "H.",
    country: "Serbia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Jakub",
    lastName: "I.",
    country: "Slovakia",
    continent: "Europe",
    age: 28,
    language: "Java",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 89,
    language: "JavaScript",
  },
  {
    firstName: "Luka",
    lastName: "J.",
    country: "Slovenia",
    continent: "Europe",
    age: 29,
    language: "Clojure",
  },
  {
    firstName: "Mariam",
    lastName: "B.",
    country: "Egypt",
    continent: "Africa",
    age: 89,
    language: "Python",
  },
];

console.log("list1: ", findSenior(list1));
console.log("list2: ", findSenior(list2));
console.log("list3: ", findSenior(list3));
