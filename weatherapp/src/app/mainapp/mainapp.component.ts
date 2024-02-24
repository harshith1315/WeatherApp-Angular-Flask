import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.css']
})
export class MainappComponent {
  constructor(private http: HttpClient) { }
  city = '';
  data:any;
  onsubmit() {
    console.log(this.city);
    this.sendFormData().subscribe(response => {
      this.data=response
      console.log(this.data)
    });
  }


  // onSubmit() {
  //   console.log(this.city);
  //   this.sendFormData().subscribe(response => {
  //     this.data=response
  //     console.log(this.data)
  //   });
  // }

  sendFormData() {
    return this.http.post<any>('http://127.0.0.1:5000/api/login', { city: this.city });
  }
}
