import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface cloth {
  id: number;
  name: string;
  color: string;
  colorCode: string;
  templateUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagegetService {

  constructor(private http: HttpClient) { }
  getImage(): Observable<cloth[]> {
    return this.http.get<cloth[]>('http://localhost:5178/cloth/template');
}
}
