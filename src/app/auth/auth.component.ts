import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {take} from'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private code: string = '';
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.getAuthorizationCode();

  }
  getAuthorizationCode() {
     this.activatedRoute.queryParams.subscribe((params)=>{
       if(params?.['code']){
        this.code = params['code'];
        console.log('code = ',this.code);

       }

     });
  }

  ngOnInit(): void {
    this.authService.getToken(this.code).pipe(take(1)).subscribe((tokens)=> {
      console.log('tokens = ',tokens);
      if((tokens as any)?.id_token){
        sessionStorage.setItem('id_token',(tokens as any)?.id_token);
        sessionStorage.setItem('access_token',(tokens as any)?.access_token);
        sessionStorage.setItem('refresh_token',(tokens as any)?.refresh_token);

        this.router.navigateByUrl('/home');
      }

    });

  }



}
