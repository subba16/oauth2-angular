import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  out : string = '';
  ngOnInit(): void {
    const token = sessionStorage.getItem('id_token');
    console.log('id_token ', token)
    const bearerToken = `Bearer ${token}`;
    const options = {headers: new HttpHeaders({
      'Authorization': bearerToken}),
      'responseType' : 'text'
    };

    this.httpService.doGet("http://localhost:9000/demo",options).subscribe((data)=>
    {
    console.log(data);
    (this.out as any) = data;
    }
    )
  }

}
