import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { About } from "../about/about";
import {Projects } from "../projects/projects"
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [About, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.initMouseEffects();
  }

  ngOnDestroy() {
    this.removeMouseEffects();
  }

  private initMouseEffects() {
    const container = this.elementRef.nativeElement.querySelector('.interactive-bg');

    if (container) {
      container.addEventListener('mousemove', this.handleMouseMove);
      container.addEventListener('mouseenter', this.handleMouseEnter);
      container.addEventListener('mouseleave', this.handleMouseLeave);
    }
  }

  private removeMouseEffects() {
    const container = this.elementRef.nativeElement.querySelector('.interactive-bg');

    if (container) {
      container.removeEventListener('mousemove', this.handleMouseMove);
      container.removeEventListener('mouseenter', this.handleMouseEnter);
      container.removeEventListener('mouseleave', this.handleMouseLeave);
    }
  }

  private handleMouseMove = (e: MouseEvent) => {
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    container.style.setProperty('--mouse-x', `${x}%`);
    container.style.setProperty('--mouse-y', `${y}%`);
  }

  private handleMouseEnter = (e: MouseEvent) => {
    const container = e.currentTarget as HTMLElement;
    container.style.setProperty('--mouse-x', '50%');
    container.style.setProperty('--mouse-y', '50%');
  }

  private handleMouseLeave = (e: MouseEvent) => {
    const container = e.currentTarget as HTMLElement;
    container.style.removeProperty('--mouse-x');
    container.style.removeProperty('--mouse-y');
  }
}
