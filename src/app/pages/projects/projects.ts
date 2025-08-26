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

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

}
