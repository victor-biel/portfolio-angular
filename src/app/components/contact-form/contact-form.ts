import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  isSending = false;

  formData = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Por favor, preencha todos os campos!',
        background: '#195e63',
        color: '#ffffff',
        confirmButtonColor: '#0d9488',
        showConfirmButton: true
      });
      return;
    }

    this.isSending = true;

    this.contactService.sendMessage(this.formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada!',
          text: 'Sua mensagem foi enviada com sucesso.',
          background: '#195e63',
          color: '#ffffff',
          confirmButtonColor: '#0d9488',
          showConfirmButton: true
        });
        this.formData = { name: '', email: '', message: '' }; // reset
        this.isSending = false;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao enviar mensagem.',
          background: '#195e63',
          color: '#ffffff',
          confirmButtonColor: '#0d9488',
          showConfirmButton: true
        });
      }
    });
    
  }

}
