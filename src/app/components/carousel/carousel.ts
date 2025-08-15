import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {

images = [
  { src:'https://wallpapers.com/images/hd/awesome-pictures-k287z98ruunquo28.jpg',url: 'https://github.com/victor-biel/Aliviamente', title: "Aliviamente", description: "Occaecat ullamco non ullamco anim aliqua mollit occaecat exercitation fugiat. Exercitation aliqua non cillum reprehenderit reprehenderit voluptate nulla nulla. Ipsum mollit minim qui velit. Qui sit quis magna officia ut. Esse nisi anim veniam est dolor. Veniam consequat duis mollit sunt esse elit excepteur pariatur culpa officia aliquip aliquip labore culpa."},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s',url: 'https://github.com/victor-biel', title: "Quizz", description: "Nulla mollit dolore veniam in quis. Id eiusmod laborum ex proident ad in ipsum sunt. Laborum fugiat est et mollit cillum est est veniam. Ipsum labore laborum irure qui. Tempor aliquip occaecat minim do eiusmod sunt culpa aliqua ut. Lorem dolore qui do eu minim magna pariatur magna Lorem veniam dolor."},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s',url: 'https://github.com/victor-biel', title: "TocaDisco", description: "Nostrud id occaecat commodo aute consequat duis elit do in consequat ea sit. Non ipsum sit velit nisi voluptate fugiat qui non labore cupidatat magna labore do ullamco. Non tempor cupidatat culpa adipisicing consectetur non non. Duis in nostrud magna mollit ullamco ipsum. In culpa nulla sint in non mollit mollit. Cupidatat proident incididunt et nostrud ad ut consequat excepteur amet. Anim ut sunt irure ut commodo enim minim anim occaecat nisi."}
];

currentIndex = 0;

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}

}