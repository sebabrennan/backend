class User {
    constructor (name, lastname, books, pets) {
        this.name = name,
        this.lastname = lastname,
        this.books = books,
        this.pets = pets
    }
    
    getFullName(name, lastname) {
        return `Nombre completo: ${name}, ${lastname}`;
      }
    addPet(newPet) {
        this.pets.push(newPet);
      }
    countPets() {
        return this.pets.length;
      }
    addBook(name, author) {
        this.books.push({ name, author });
      }
    getBookNames() {
        return this.books.map(({ name }) => name);
      }
    }
    
    const pets = ["dog", "cat"];
    const books = [
      {
        name: "El señor de los anillos: la comunidad del anillo",
        author: " J. R. R. Tolkien",
      },
      {
        name: "Harry Potter y la piedra filosofal",
        author: "J. K. Rowling",
      },
    ];
    
    const user = new User("Sebastian", "Brennan", books, pets);
    
    user.addPet("bird"); // Agrega nueva mascota
    user.addBook("Cien años de soledad", "Gabriel García Marquez"); // Agrega un libro
    
    
    console.log(user);
    console.log(`Cantidad de mascotas: ${user.countPets()}`) // Cuenta la cantidad de mascotas)
    console.log(`Nombres de los libros:`) 
    console.log(`${user.getBookNames()}`) // Retorna nombres de los libros