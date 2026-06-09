class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const chocolates = [
  new Product(1, "Mars", 17),
  new Product(3, "Ghirardelli", 28),
  new Product(2, "Hersheys", 4),
  new Product(4, "Godiva", 21),
];

const sortByName = [...chocolates]
  .sort((a, b) => a.name.localeCompare(b.name));

const sortById = [...chocolates]
  .sort((a, b) => a.id - b.id);

const sortByPrice = [...chocolates]
  .sort((a, b) => a.price - b.price);

const expensiveChocolates =
  chocolates.filter(p => p.price > 20);

console.log("Sort By Name:", sortByName);
console.log("Sort By Id:", sortById);
console.log("Sort By Price:", sortByPrice);
console.log("Price > 20:", expensiveChocolates);