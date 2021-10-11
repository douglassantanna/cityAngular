import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class APIService {
readonly URL = "http://localhost:3005/city";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  public getData(): Observable<any>
  {
    return this.http.get(this.URL);
  }

  public postData(location: Location): Observable<Location>{
    return this.http.post<Location>(this.URL, location)
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
