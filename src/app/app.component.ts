import {Component, OnInit, OnDestroy, OnChanges, Input} from '@angular/core';
import {DogService} from './dog.service';
import {CatsService} from './cats.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  constructor( private cat: CatsService) {}
  dogName: string;
  dogWeight: number;
  cats: any[];
  title = 'Welcome to my first angular 2.0 adventure!';

  sayHello: any;
  ngOnInit() {
      // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
  }
  ngOnChanges() {
    console.log('changes happened');
  }
  ngOnDestroy() {
    window.clearInterval(this.sayHello);
  }

  // removeDogs(dog) {
  //   this.dogs = this.dogService.deleteDog(dog);
  //   // this.dogService.deleteDog(dog);
  //
  // }
  // // get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  // changeDate(dog) {
  //   if (dog.toggle == 'fullDate') {
  //     dog.toggle = 'shortTime';
  //   } else {
  //     dog.toggle = 'fullDate';
  //   }
  // }
}


