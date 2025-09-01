import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from "../../components/carousel/carousel";
import { Background } from '../../components/background/background';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from './projects.data'



@Component({
  selector: 'app-projects',
  imports: [CommonModule, Carousel, Background, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = PROJECTS;

  selectedProject: Project | null = null;

  selectedImageIndex = 0;

  isZoomed = false;

  nextImage() {
    if(this.selectedProject?.image) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.selectedProject.image.length;
    }
  }

  prevImage() {
    if(this.selectedProject?.image) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.selectedProject.image.length) % this.selectedProject.image.length;
    }
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.selectedImageIndex = 0;
  }

  closeModal() {
    this.selectedProject = null;
    
  }

}
