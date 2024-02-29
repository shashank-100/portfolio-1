import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from './contact.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactServ = inject(ContactService);
  domSenitizer = inject(DomSanitizer);

  icons = { faEnvelope, faPhone, faArrowRightLong };

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  showFormErrorsSig = signal(false);
  isSubmitInProcessSig = signal(false);
  showApiRespSig = signal<{ varient: 'success' | 'error'; message: string } | null>(null);

  onSubmit() {
    if (this.formData.invalid) {
      this.showFormErrorsSig.set(true);
      console.log('invalid form submit');
      return;
    }

    console.log('form submitted: ', { ...this.formData.value });

    this.isSubmitInProcessSig.set(true);
    this.showFormErrorsSig.set(false);
    this.showApiRespSig.set(null);

    this.contactServ
      .addContact(this.formData.value as { name: string; email: string; message: string })
      .then((resp) => {
        console.log('contact written with ID: ', resp);
        this.setShowApiResp('The form was submitted successfully.', 'success');
        this.formData.reset();
        this.isSubmitInProcessSig.set(false);
      })
      .catch((err) => {
        console.error('error: ', err);
        this.isSubmitInProcessSig.set(false);
        this.setShowApiResp('Something went wrong, please try again!', 'error');
      });
  }

  setShowApiResp(
    message: string,
    varient: 'success' | 'error',
    options?: { autoHide?: boolean; hideDelay?: number },
  ) {
    options = { autoHide: true, hideDelay: 5000, ...(options || {}) };

    this.showApiRespSig.set({ varient, message });

    if (options.autoHide) {
      setTimeout(() => {
        this.showApiRespSig.set(null);
      }, options.hideDelay);
    }
  }
}
