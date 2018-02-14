import {Injectable} from '@angular/core';
import Dog from './dogs/dog';

let DOGS: Dog[] = [
  {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2001, 6, 12), toggle: 'shortTime'},
  {id: 2, name: 'Woof', weight: 8, birthDate: new Date(2006, 2, 12), toggle: 'fullDate'},
  {id: 3, name: 'Chuck', weight: 28, birthDate: new Date(1992, 3, 23), toggle: 'fullDate'},
  {id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 2, 15), toggle: 'fullDate'},
  {id: 5, name: 'Prince', weight: 65, birthDate: new Date(2016, 5, 21), toggle: 'fullDate'}
];

@Injectable()
export class DogService {
  dogs: Dog[] = DOGS;

  constructor() {  }

  getDogs(): Dog[] {
    return DOGS;
  }

  deleteDog(dogname) {
    DOGS = DOGS.filter((dog) => {
      return dog.name !== dogname;
    });
    return DOGS;


  }
  addDog(newDog: Dog) {
    newDog.id = this.generateId();
    this.dogs.push(newDog);

  }
  editDog(id: number, dog: Dog){
    let updateDog = this.dogs.find((dog)=>dog.id==id)
    updateDog = dog

  }
  generateId(): number {
    return this.dogs[this.dogs.length - 1].id + 1;
  }
}
