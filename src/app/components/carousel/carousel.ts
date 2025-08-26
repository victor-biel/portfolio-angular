import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PROJECTS } from '../../pages/projects/projects.data'

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {

  projects = PROJECTS;
// images = [
//   { src:'./aliviamente_logo_colorida.svg',url: 'https://github.com/victor-biel/Aliviamente', title: "Aliviamente", description: "Aplicação de solicitações de consultas com profissionais de apoio de saúde mental voluntários. Inclui a funcionalidade de vídeo chamadas e está disponível nas versões web e mobile.", technologies: "PHP, JavaScript, MySQL, HTML, CSS, Bootstrap"},
//   { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s',url: 'https://github.com/victor-biel', title: "Quizz", description: "Jogo quiz de programação feito em React que permite o cadastro dos jogadores para criar seus perfis e salvar o seu progresso.", technologies: "JavaScript, CSS, HTML"},
//   { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s',url: 'https://github.com/victor-biel', title: "TocaDisco", description: "Nostrud id occaecat commodo aute consequat duis elit do in consequat ea sit. Non ipsum sit velit nisi voluptate fugiat qui non labore cupidatat magna labore do ullamco. Non tempor cupidatat culpa adipisicing consectetur non non. Duis in nostrud magna mollit ullamco ipsum. In culpa nulla sint in non mollit mollit. Cupidatat proident incididunt et nostrud ad ut consequat excepteur amet. Anim ut sunt irure ut commodo enim minim anim occaecat nisi."}
// ];

currentIndex = 0;

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.projects.length;
}

prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
}

}
