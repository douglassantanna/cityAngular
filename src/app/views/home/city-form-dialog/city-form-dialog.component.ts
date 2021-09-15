import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { APIService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-city-form-dialog',
  templateUrl: './city-form-dialog.component.html',
  styleUrls: ['./city-form-dialog.component.css']
})
export class CityFormDialogComponent implements OnInit {

  public locationForm!: FormGroup;

  constructor(private http: APIService, private fb: FormBuilder, public dialogRef: MatDialogRef<CityFormDialogComponent>) { }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
    city: ['', [Validators.required]],
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.locationForm.reset();
  }

  createLocation()
  {
    this.http.postData(this.locationForm.value).subscribe(res => {
      this.http.showMessage("Location added!");
    });
    this.dialogRef.close();
    //limpar formulário
    this.locationForm.reset();
  }
}
