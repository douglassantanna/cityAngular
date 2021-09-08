import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import axios from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
readonly URL = "http://localhost:3000/cities";
results$!: Observable<any>;

  constructor(private http: HttpClient) { }

  getData()
  {
    this.results$ = this.http.get(this.URL)
    .pipe(
      map((res: any) => res.results$)
    );
  }
}
