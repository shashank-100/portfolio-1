import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable()
export class ContactService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  async addContact(payload: { name: string; email: string; message: string }) {
    const docRef = await addDoc(collection(this.firestore, 'contacts'), {
      ...payload,
    });

    return docRef.id;
  }
}
