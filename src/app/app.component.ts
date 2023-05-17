import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title :any;
  headers:HttpHeaders ;

  baseURL = environment.baseURL;


  constructor(private http: HttpClient) {
    this.headers= new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('X-Fab-Api-Key','Fabzia@#009');
  }



  login() {
    const inputData = {
      mobile : 9321103771
    };
    this.checkLoginAndGetOtp(inputData).subscribe(res=>{
      this.title= res;
    });
  }

    checkLoginAndGetOtp(inputData:any): Observable<any> {
      return this.http.post(`${this.baseURL}`+'/login',inputData,{ 'headers': this.headers })
    }
}
