import {Injectable} from '@angular/core';


const CATS = [
  {name: 'Meow', weight: 20, birthDate: new Date(2001, 6, 12)},
  {name: 'Bau', weight: 8, birthDate: new Date(2006, 2, 12)},
  {name: 'Rau', weight: 28, birthDate: new Date(1992, 3, 23)},
  {name: 'Sami', weight: 4, birthDate: new Date(2012, 2, 15)},
  {name: 'Pe', weight: 65, birthDate: new Date(2016, 5, 21)}
];

@Injectable()
export class CatsService {

  constructor() {
  }

  getCats() {
    return CATS;
  }

}
