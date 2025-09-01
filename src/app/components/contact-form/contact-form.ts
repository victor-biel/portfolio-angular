import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  formData = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Preencha todos os campos!');
      return;
    }

    this.contactService.sendMessage(this.formData).subscribe({
      next: () => {
        alert('Mensagem enviada com sucesso!');
        this.formData = { name: '', email: '', message: '' }; // reset
      },
      error: () => alert('Erro ao enviar mensagem.')
    });
  }

}
