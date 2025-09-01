// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private url = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.url, data);
  }
}
