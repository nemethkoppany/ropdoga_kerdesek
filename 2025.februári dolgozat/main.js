class Person {
    #fname;

    get fname(){
      return this.#fname;
   }

    constructor(fname){
      this.#fname = fname 
   }
}
const a = new Person('John');
console.log(Person.fname)