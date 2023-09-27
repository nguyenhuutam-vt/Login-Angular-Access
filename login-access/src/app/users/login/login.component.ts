import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errmsg: any;
  errmsgShow = false;
  ngOnInit(): void {}
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiserviceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      EmailId: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  loginClick() {
    if (this.loginForm.valid) {
      this.service.onLoginn(this.loginForm.value).subscribe((res: any) => {
        if (res.token != null) {
          alert('Success');
          console.log(res, 'res');
          localStorage.clear;
          localStorage.setItem('token', res.token);
          this.router.navigate(['tutorial']).then(() => {
            window.location.reload();
          });
          //
        } else {
          alert('Wrong ');
        }
      });
    } else {
      this.errmsgShow = true;
      this.errmsg = 'All filled require';
    }
  }
}
