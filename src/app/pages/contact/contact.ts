import { Component } from '@angular/core';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  
  showOrHiddenContactForm() {
    const form = document.getElementById('contact-form');
    if (form?.classList.contains('hidden')) {
      form?.classList.remove('hidden');
    } else {
      form?.classList.add('hidden');
    }

  }

  
  

}
