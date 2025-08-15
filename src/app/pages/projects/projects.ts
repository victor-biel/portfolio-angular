import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";

@Component({
  selector: 'app-projects',
  imports: [Carousel],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  currentIndex = 0;

}
