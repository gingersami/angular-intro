import {Component, OnInit} from '@angular/core';
import {DogService} from '../dog.service';
import Dog from '../dogs/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[];
  title: string;
  selectedDog: Dog = new Dog();

  constructor(private dogService: DogService) {
  }

  ngOnInit() {
    this.title = 'dogz';
    this.dogs = this.dogService.getDogs();
  }

  editDog(dog: Dog) {
    this.selectedDog = Object.assign({}, dog);
  }

}

